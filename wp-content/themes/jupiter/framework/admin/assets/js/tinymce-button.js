(function() {

tinymce.PluginManager.add('mk_shortcodes', function(editor, url) {

  editor.addButton('mk_shortcodes_button', {

      type: 'menubutton',
      title: 'Insert Shortcode',
      text: '',
      image: url + '/masterkey-admin-icon.png',
      style: 'background-image: url("' + url + '/masterkey-admin-icon.png' + '"); background-repeat: no-repeat; background-position: 5px 4px;"',
      icon: true,
      menu: [

        {
          text: 'Structure',
          menu: [{
              text: 'Row',
              onclick: function() {
                editor.insertContent('[vc_row fullwidth="false"][vc_column width="1/1"]Place Content Here[/vc_column][/vc_row]');
              }
            }, {
              text: 'Page Section',
              onclick: function() {
                editor.insertContent('[mk_page_section bg_image="" border_color="#e2e2e2" attachment="scroll" bg_position="left top" bg_repeat="repeat" bg_stretch="true" parallax="false" parallax_direction="vertical" speed_factor="0.3" bg_video="yes" mp4="MP4 Format" webm="WebM Format" ogv="OGV Format" poster_image="Background Video Preview image (and fallback image)" mask="true" color_mask="#dd9933" mask_opacity="0.6" padding="20" full_height="false" full_width="false" section_id="Section-ID"][vc_column width="1/1"][/vc_column][/mk_page_section]');
              }
            }, {
              text: 'Custom Box',
              onclick: function() {
                editor.insertContent('[mk_custom_box bg_color="#f6f6f6" bg_position="left top" bg_repeat="repeat" bg_stretch="false" padding_vertical="30" padding_horizental="20" margin_bottom="10" min_height="100"][/mk_custom_box]');
              }
            }, {
              text: 'Column 1/2',
              onclick: function() {
                editor.insertContent('[vc_column width="1/2"]Place Content Here[/vc_column]');
              }
            }, {
              text: 'Column 1/3',
              onclick: function() {
                editor.insertContent('[vc_column width="1/3"]Place Content Here[/vc_column]');
              }
            }, {
              text: 'Column 1/4',
              onclick: function() {
                editor.insertContent('[vc_column width="1/4"]Place Content Here[/vc_column]');
              }
            }, {
              text: 'Column 1/6',
              onclick: function() {
                editor.insertContent('[vc_column width="1/6"]Place Content Here[/vc_column]');
              }
            }, {
              text: 'Column 2/3',
              onclick: function() {
                editor.insertContent('[vc_column width="2/3"]Place Content Here[/vc_column]');
              }
            }, {
              text: 'Column 3/4',
              onclick: function() {
                editor.insertContent('[vc_column width="3/4"]Place Content Here[/vc_column]');
              }
            }, {
              text: 'Column 5/6',
              onclick: function() {
                editor.insertContent('[vc_column width="5/6"]Place Content Here[/vc_column]');
              }
            }, {
              text: '1/2 + 1/2',
              onclick: function() {
                editor.insertContent('[vc_row][vc_column width="1/2"][/vc_column][vc_column width="1/2"][/vc_column][/vc_row]');
              }
            }, {
              text: '1/3 + 1/3 + 1/3',
              onclick: function() {
                editor.insertContent('[vc_row][vc_column width="1/3"][/vc_column][vc_column width="1/3"][/vc_column][vc_column width="1/3"][/vc_column][/vc_row]');
              }
            }, {
              text: '1/4 + 1/4 + 1/4 + 1/4',
              onclick: function() {
                editor.insertContent('[vc_row][vc_column width="1/4"][/vc_column][vc_column width="1/4"][/vc_column][vc_column width="1/4"][/vc_column][vc_column width="1/4"][/vc_column][/vc_row]');
              }
            }, {
              text: '2/3 + 1/3',
              onclick: function() {
                editor.insertContent('[vc_row][vc_column width="2/3"][/vc_column][vc_column width="1/3"][/vc_column][/vc_row]');
              }
            }, {
              text: '3/4 + 1/4',
              onclick: function() {
                editor.insertContent('[vc_row][vc_column width="3/4"][/vc_column][vc_column width="1/4"][/vc_column][/vc_row]');
              }
            }, {
              text: '1/4 + 3/4',
              onclick: function() {
                editor.insertContent('[vc_row][vc_column width="1/4"][/vc_column][vc_column width="3/4"][/vc_column][/vc_row]');
              }
            }, {
              text: '1/4 + 1/2 + 1/4',
              onclick: function() {
                editor.insertContent('[vc_row][vc_column width="1/4"][/vc_column][vc_column width="1/2"][/vc_column][vc_column width="1/4"][/vc_column][/vc_row]');
              }
            }, {
              text: '1/6 + 3/4 + 1/6',
              onclick: function() {
                editor.insertContent('[vc_row][vc_column width="1/6"][/vc_column][vc_column width="2/3"][/vc_column][vc_column width="1/6"][/vc_column][/vc_row]');
              }
            }, {
              text: '1/6 + 1/6 + 1/6 + 1/6 + 1/6 + 1/6',
              onclick: function() {
                editor.insertContent('[vc_row][vc_column width="1/6"][/vc_column][vc_column width="1/6"][/vc_column][vc_column width="1/6"][/vc_column][vc_column width="1/6"][/vc_column][vc_column width="1/6"][/vc_column][vc_column width="1/6"][/vc_column][/vc_row]');
              }
            }, {
              text: 'Divider',
              onclick: function() {
                editor.insertContent('[mk_divider style="single" divider_color="#dddddd" divider_width="full_width" margin_top="20" margin_bottom="20"]');
              }
            }, {
              text: 'Padding Divider',
              onclick: function() {
                editor.insertContent('[mk_padding_divider size="40"]');
              }
            }, {
              text: 'Clearboth',
              onclick: function() {
                editor.insertContent('[mk_clearboth]');
              }
            }

          ]
        },

        {
          text: 'Images',
          menu: [{
              text: 'Image',
              onclick: function() {
                editor.insertContent('[mk_image src="IMAGE_URL" image_width="800" image_height="350" crop="true" lightbox="false" frame_style="simple" target="_self" caption_location="inside-image" align="left" margin_bottom="10"]');
              }
            }, {
              text: 'Circle Frame Image',
              onclick: function() {
                editor.insertContent('[mk_circle_image src="IMAGE_URL" image_diameter="500" link="image_link"]');
              }
            }, {
              text: 'Moving Image',
              onclick: function() {
                editor.insertContent('[mk_moving_image src="IMAGE_URL" axis="vertical" align="left" title="alt text" link="link url"]');
              }
            }, {
              text: 'Image Gallery',
              onclick: function() {
                editor.insertContent('[mk_gallery images="6920,6918,6902,6896" column="3" height="500" frame_style="simple" disable_title="true"]');
              }
            }

          ]
        },



        {
          text: 'Typography',
          menu: [

            {
              text: 'Fancy Title',
              onclick: function() {
                editor.insertContent('[mk_fancy_title tag_name="h2" style="true" color="#393836" size="14" font_weight="inhert" margin_top="0" margin_bottom="18" font_family="none" align="left"]Text Goes Here[/mk_fancy_title]');
              }
            }, {
              text: 'Title Box',
              onclick: function() {
                editor.insertContent('[mk_title_box color="#393836" highlight_color="#000000" highlight_opacity="0.3" size="18" line_height="34" font_weight="inherit" margin_top="0" margin_bottom="18" font_family="none" align="left"]Text Goes Here[/mk_title_box]');
              }
            }, {
              text: 'Text Block',
              onclick: function() {
                editor.insertContent('[vc_column_text disable_pattern="true" align="left" margin_bottom="0"]Text Goes Here[/vc_column_text]');
              }
            }, {
              text: 'Dropcaps',
              onclick: function() {
                editor.insertContent('[mk_dropcaps style="simple-style"]D[/mk_dropcaps]');
              }
            }, {
              text: 'Tooltip',
              onclick: function() {
                editor.insertContent('[mk_tooltip text="Text" tooltip_text="Tooltip Text" href="URL"]');
              }
            }, {
              text: 'Tabs',
              onclick: function() {
                editor.insertContent('[vc_tabs style="default" orientation="horizental" tab_location="left" container_bg_color="#fff"][vc_tab title="Tab 1" tab_id="1389303594-1-24"][/vc_tab][vc_tab title="Tab 2" tab_id="1389303594-2-84"][/vc_tab][/vc_tabs]');
              }
            }, {
              text: 'Accordion',
              onclick: function() {
                editor.insertContent('[vc_accordions style="fancy-style" action_style="accordion-action" open_toggle="0" container_bg_color="#fff"][vc_accordion_tab title="Section 1"][/vc_accordion_tab][vc_accordion_tab title="Section 2"][/vc_accordion_tab][/vc_accordions]');
              }
            }, {
              text: 'Toggle',
              onclick: function() {
                editor.insertContent('[mk_toggle title="Title" icon="moon-box-remove" style="simple"]content[/mk_toggle]');
              }
            }, {
              text: 'Blockquote',
              onclick: function() {
                editor.insertContent('[mk_blockquote style="quote-style" font_family="none" text_size="12" align="left"]Text[/mk_blockquote]');
              }
            }, {
              text: 'Highlight Text',
              onclick: function() {
                editor.insertContent('[mk_highlight text="Text" text_color="#ffffff" bg_color="#e5ff3d" font_family="none"]');
              }
            }, {
              text: 'Custom List',
              onclick: function() {
                editor.insertContent('[mk_custom_list style="48" icon_color="#00c8d7" margin_bottom="30" align="none"]<ul><li>List Item</li><li>list Item</li></ul>[/mk_custom_list]');
              }
            }, {
              text: 'Font Icon',
              onclick: function() {
                editor.insertContent('[mk_font_icons icon="moon-droplet" color="#00a4db" size="x-large" padding_horizental="4" padding_vertical="4" circle="true" circle_color="#f5f5f5" align="none" link="URL"]');
              }
            }, {
              text: 'Icon Box',
              onclick: function() {
                editor.insertContent('[mk_icon_box title="Title" text_size="16" font_weight="inherit" read_more_txt="Read More Text" read_more_url="Read More URL" icon="moon-clock-7" style="simple_minimal" icon_size="small" rounded_circle="false" icon_location="left" circled="false" icon_color="#00c8d7" icon_circle_color="#00c8d7" box_blur="false" margin="30"]Box Content[/mk_icon_box]');
              }
            }, {
              text: 'Button',
              onclick: function() {
                editor.insertContent('[mk_button dimension="three" size="medium" outline_skin="dark" bg_color="#00c8d7" text_color="light" icon="moon-quill" url="Button URL" target="_self" align="left" id="Buton ID" margin_top="0" margin_bottom="15"]Button text[/mk_button]');
              }
            }, {
              text: 'Message Box',
              onclick: function() {
                editor.insertContent('[mk_message_box type="comment-message"]Content Goes Here[/mk_message_box]');
              }
            }, {
              text: 'Mini Callout box',
              onclick: function() {
                editor.insertContent('[mk_mini_callout title="Title" button_text="Button text" button_url="Button URL"]Content[/mk_mini_callout]');
              }
            }
          ]
        },



        {
          text: 'Slideshows',
          menu: [

            {
              text: 'Image Slideshow',
              onclick: function() {
                editor.insertContent('[mk_image_slideshow images="6920,6918,6902" image_width="770" image_height="350" effect="fade" animation_speed="700" slideshow_speed="7000" pause_on_hover="false" smooth_height="true" direction_nav="true"]');
              }
            }, {
              text: 'Full Width Slideshow',
              onclick: function() {
                editor.insertContent('[mk_fullwidth_slideshow border_color="#eaeaea" attachment="scroll" bg_position="left top" enable_3d="false" speed_factor="4" images="6893,6888" effect="fade" animation_speed="700" slideshow_speed="7000" pause_on_hover="false" smooth_height="true" direction_nav="true"]');
              }
            }, {
              text: 'Laptop Slideshow',
              onclick: function() {
                editor.insertContent('[mk_laptop_slideshow images="6984,6902,6896,6893,6888" size="full" animation_speed="700" slideshow_speed="7000" pause_on_hover="false"]');
              }
            }, {
              text: 'LCD Slideshow',
              onclick: function() {
                editor.insertContent('[mk_lcd_slideshow images="6968,6956" animation_speed="700" slideshow_speed="7000" pause_on_hover="false"]');
              }
            }, {
              text: 'Flexslider',
              onclick: function() {
                editor.insertContent('[mk_flexslider count="10" slides="2729,2733,2734" order="ASC" orderby="menu_order" image_height="350" image_width="770" effect="fade" animation_speed="700" slideshow_speed="7000" pause_on_hover="false" smooth_height="true" direction_nav="true" caption_color="#ffffff" caption_bg_opacity="0.6"]');
              }
            }, {
              text: 'LayerSlider',
              onclick: function() {
                editor.insertContent('[mk_layerslider id="4"]');
              }
            }, {
              text: 'Testimonial Slideshow',
              onclick: function() {
                editor.insertContent('[mk_testimonials title="Title" style="boxed" show_as="slideshow" column="3" skin="dark" count="10" order="ASC" orderby="menu_order"]');
              }
            }
          ]
        },



        {
          text: 'Content',
          menu: [

            {
              text: 'Progress Bar',
              onclick: function() {
                editor.insertContent('[mk_skill_meter_chart title="Title" percent_1="0" color_1="#e74c3c" name_1="Skill 1 : Name" percent_2="0" color_2="#8c6645" name_2="Skill 2 : Name" percent_3="0" color_3="#265573" name_3="Skill 3 : Name" percent_4="0" color_4="#008b83" name_4="Skill 4 : Name" percent_5="0" color_5="#d96b52" name_5="Skill 5 : Name" percent_6="0" color_6="#82bf56" name_6="Skill 6 : Name" percent_7="0" color_7="#4ecdc4" name_7="Skill 7 : Name" default_text="Skill" center_color="#1e3641" default_text_color="#ffffff"]');
              }
            }, {
              text: 'Chart',
              onclick: function() {
                editor.insertContent('[mk_chart percent="50" bar_color="#00c8d7" track_color="#ececec" line_width="10" bar_size="150" content_type="percent" icon="moon-alarm-2"]');
              }
            }, {
              text: 'Skill Meter',
              onclick: function() {
                editor.insertContent('[mk_skill_meter title="Title" percent="50" color="#00c8d7"]');
              }
            }, {
              text: 'Pricing Tables',
              onclick: function() {
                editor.insertContent('[mk_pricing_table style="multicolor" table_number="4" order="ASC" orderby="menu_order"]');
              }
            }, {
              text: 'Fancy Table',
              onclick: function() {
                editor.insertContent('[mk_table title="Title" style="style1"]<table width="100%"><thead><tr><th>Column 1</th><th>Column 2</th><th>Column 3</th><th>Column 4</th></tr></thead><tbody><tr><td>Item #1</td><td>Description</td><td>Subtotal:</td><td>$3.00</td></tr><tr><td>Item #2</td><td>Description</td><td>Discount:</td><td>$4.00</td></tr><tr><td>Item #3</td><td>Description</td><td>Shipping:</td><td>$7.00</td></tr><tr><td>Item #4</td><td>Description</td><td>Tax:</td><td>$6.00</td></tr><tr><td><strong>All Items</strong></td><td><strong>Description</strong></td><td><strong>Your Total:</strong></td><td><strong>$20.00</strong></td></tr></tbody></table>[/mk_table]');
              }
            }, {
              text: 'Milestone',
              onclick: function() {
                editor.insertContent('[mk_milestone icon="moon-bell" icon_size="small" icon_color="#00c8d7" start="0" stop="100" speed="2000" prefix="Number Prefix" suffix="Number Suffix" text="Text Below Number" text_color="#999999"]');
              }
            }, {
              text: 'Event Countdown',
              onclick: function() {
                editor.insertContent('[mk_countdown date="12/24/2016 12:00:00" offset="0"]');
              }
            }
          ]
        },



        {
          text: 'Content',
          menu: [

            {
              text: 'Blog',
              onclick: function() {
                editor.insertContent('[mk_blog style="modern" column="3" grid_image_height="350" count="10" offset="0" pagination="true" disable_meta="true" disable_lightbox="true" disable_comments_share="true" pagination_style="1" order="ASC" orderby="menu_order"]');
              }
            }, {
              text: 'Blog Carousel',
              onclick: function() {
                editor.insertContent('[mk_blog_carousel view_all="*" count="10" enable_excerpt="false" offset="0" order="ASC" orderby="menu_order"]');
              }
            }, {
              text: 'Blog Showcase',
              onclick: function() {
                editor.insertContent('[mk_blog_showcase offset="0" order="ASC" orderby="menu_order"]');
              }
            }, {
              text: 'Portfolio',
              onclick: function() {
                editor.insertContent('[mk_portfolio style="classic" ajax="false" column="3" disable_excerpt="true" disable_permalink="true" count="10" sortable="true" offset="0" height="300" pagination="true" pagination_style="1" order="ASC" orderby="menu_order" target="_self"]');
              }
            }, {
              text: 'Portfolio Carousel',
              onclick: function() {
                editor.insertContent('[mk_portfolio_carousel style="classic" view_all="*" count="10" show_items="4" offset="0" disable_title_cat="true" order="ASC" orderby="menu_order"]');
              }
            }, {
              text: 'News',
              onclick: function() {
                editor.insertContent('[mk_news count="10" offset="0" image_height="250" pagination="true" pagination_style="2" order="ASC" orderby="menu_order"]');
              }
            }, {
              text: 'News Tab',
              onclick: function() {
                editor.insertContent('[mk_news_tab tab_title="News"]');
              }
            }, {
              text: 'FAQ',
              onclick: function() {
                editor.insertContent('[mk_faq style="fancy" sortable="true" count="50" offset="0" order="DESC" orderby="menu_order"]');
              }
            }, {
              text: 'Employees',
              onclick: function() {
                editor.insertContent('[mk_employees style="simple" column="3" rounded_image="true" box_blur="false" count="10" offset="0" description="true" order="ASC" orderby="menu_order"]');
              }
            }, {
              text: 'Clients',
              onclick: function() {
                editor.insertContent('[mk_clients count="10" order="ASC" orderby="menu_order" height="110" autoplay="true" target="_self"]');
              }
            }
          ]
        },


        {
          text: 'Socials',
          menu: [

            {
              text: 'Twitter Feeds',
              onclick: function() {
                editor.insertContent('[vc_twitter twitter_name="Twitter name" tweets_count="5"]');
              }
            }, {
              text: 'Flickr Feeds',
              onclick: function() {
                editor.insertContent('[vc_flickr flickr_id="Flickr ID" count="6" thumb_size="s" type="user" display="latest"]');
              }
            }, {
              text: 'Facebook Like',
              onclick: function() {
                editor.insertContent('[vc_facebook type="standard"]');
              }
            }, {
              text: 'Tweetme button',
              onclick: function() {
                editor.insertContent('[vc_tweetme type="horizontal"]');
              }
            }, {
              text: 'Google+ Button',
              onclick: function() {
                editor.insertContent('[vc_googleplus annotation="inline"]');
              }
            }, {
              text: 'Pinterest button',
              onclick: function() {
                editor.insertContent('[vc_pinterest]');
              }
            }, {
              text: 'Social Networks',
              onclick: function() {
                editor.insertContent('[mk_social_networks size="small" style="rounded" margin="4" icon_color="#cccccc" align="left" facebook="#" twitter="#" rss="#" dribbble="#" digg="#" pinterest="#" flickr="#" google_plus="#" linkedin="#" blogger="#" youtube="#" last_fm="#" stumble_upon="#" tumblr="#" vimeo="#" wordpress="#" yelp="#" reddit="#" xing="#"]');
              }
            }, {
              text: 'Skype Number',
              onclick: function() {
                editor.insertContent('[mk_skype display_number="Your Skype Number (Display)" number="Your Skype Number (exact number)"]');
              }
            }, {
              text: 'Contact Form',
              onclick: function() {
                editor.insertContent('[mk_contact_form style="modern" skin="dark" email="#"]');
              }
            }, {
              text: 'Contact info',
              onclick: function() {
                editor.insertContent('[mk_contact_info title="#" phone="#" fax="#" email="#" address="#" person="#" company="#" skype="#" website="#"]');
              }
            }, {
              text: 'Video Player',
              onclick: function() {
                editor.insertContent('[vc_video title="#" link="#"]');
              }
            }, {
              text: 'Audio Player',
              onclick: function() {
                editor.insertContent('[mk_audio mp3_file="#" ogg_file="#" thumb="#" audio_author="#"]');
              }
            }, {
              text: 'Google Maps',
              onclick: function() {
                editor.insertContent('[vc_gmaps title="#" link="#" size="300" type="m" zoom="14" frame_style="simple"]');
              }
            }, {
              text: 'Advanced Google Maps',
              onclick: function() {
                editor.insertContent('[mk_advanced_gmaps latitude="Address 1 : Latitude" longitude="Address 1 : Longitude" address="Address 1 : Full Address Text (shown in tooltip)" latitude_2="Address 2 : Latitude" longitude_2="Address 2 : Longitude" address_2="Address 2 : Full Address Text (shown in tooltip)" latitude_3="Address 3 : Latitude" longitude_3="Address 3 : Longitude" address_3="Address 3 : Full Address Text (shown in tooltip)" pin_icon="Upload Marker Icon" height="300" parallax="true" zoom="14" pan_control="true" draggable="true" zoom_control="true" map_type_control="true" scale_control="true" modify_coloring="false" hue="#ccc" saturation="1" lightness="1"]');
              }
            }
          ]
        }

      ]

    });

  });

})();