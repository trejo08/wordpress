<?php

$el_class = $title = $twitter_name = $tweet_count = $el_position = $tweets_count = '';
extract( shortcode_atts( array(
			'title' => '',
			'twitter_name' => 'twitter',
			'tweets_count' => 5,
			'el_class' => ''
		), $atts ) );
$output = '';
global $mk_options;
$consumer_key = $mk_options['twitter_consumer_key'];
$consumer_secret = $mk_options['twitter_consumer_secret'];
$access_token = $mk_options['twitter_access_token'];
$access_token_secret = $mk_options['twitter_access_token_secret'];

$id = uniqid();

if ( !empty( $title ) ) {
	$output .= '<h3 class="mk-shortcode mk-fancy-title pattern-style mk-shortcode-heading"><span>'.$title.'</span></h3>';
}
$output .= '<div class="mk-shortcode mk-twitter-shortcode '.$el_class.'">';
if ($twitter_name && $consumer_key && $consumer_secret && $access_token && $access_token_secret && $tweets_count) {
    
    $transName = 'mk_Ken_tweets_' . $id;
    $cacheTime = 10;
    if (false === ($twitterData = get_transient($transName))) {
        
        $token = get_option('mk_twitter_token_' . $id);
        
        delete_option('mk_twitter_token_' . $id);
        
        
        if (!$token) {
            
            $credentials = $consumer_key . ':' . $consumer_secret;
            $toSend      = base64_encode($credentials);
            
            $args = array(
                'method' => 'POST',
                'httpversion' => '1.1',
                'blocking' => true,
                'headers' => array(
                    'Authorization' => 'Basic ' . $toSend,
                    'Content-Type' => 'application/x-www-form-urlencoded;charset=UTF-8'
                ),
                'body' => array(
                    'grant_type' => 'client_credentials'
                )
            );
            
            add_filter('https_ssl_verify', '__return_false');
            $response = wp_remote_post('https://api.twitter.com/oauth2/token', $args);
            
            $keys = json_decode(wp_remote_retrieve_body($response));
            
            if ($keys) {
                update_option('mk_twitter_token_' . $id, $keys->access_token);
                $token = $keys->access_token;
            }
        }
        $args = array(
            'httpversion' => '1.1',
            'blocking' => true,
            'headers' => array(
                'Authorization' => "Bearer $token"
            )
        );
        
        add_filter('https_ssl_verify', '__return_false');
        $api_url  = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' . $twitter_name . '&count=' . $tweets_count;
        $response = wp_remote_get($api_url, $args);
        
        set_transient($transName, wp_remote_retrieve_body($response), 60 * $cacheTime);
    }
    @$twitter = json_decode(get_transient($transName), true);
    
    
    if ($twitter && is_array($twitter)) {
        
        $output .= '<div id="tweets_' . $id . '">';
        
        $output .= '<ul class="mk-tweet-list mk-tweet-shortcode">';
        foreach ($twitter as $tweet):
            $output .= '<li>';
            $output .= '<span class="tweet-text">';
            $latestTweet = $tweet['text'];
            $latestTweet = preg_replace('/http:\/\/([a-z0-9_\.\-\+\&\!\#\~\/\,]+)/i', '&nbsp;<a href="http://$1" target="_blank">http://$1</a>&nbsp;', $latestTweet);
            $latestTweet = preg_replace('/@([a-z0-9_]+)/i', '&nbsp;<a href="http://twitter.com/$1" target="_blank">@$1</a>&nbsp;', $latestTweet);
            $output .= $latestTweet;
            
            $output .= '</span>';
            
            
            $twitterTime = strtotime($tweet['created_at']);
            $timeAgo     = mk_ago($twitterTime);
            
            $output .= '<a href="http://twitter.com/' . $tweet['user']['screen_name'] . '/statuses/' . $tweet['id_str'] . '" class="tweet-time">' . $timeAgo . '</a>';
            $output .= '</li>';
        endforeach;
        $output .= '</ul>';
        $output .= '</div>';
        
    }
}
$output .= '</div>';


$output = $this->startRow( $el_position ) . $output . $this->endRow( $el_position );
echo $output;
