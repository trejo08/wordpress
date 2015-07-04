(function() {
  tinymce.create('tinymce.plugins.mkShortcodeMce', {

    init: function(ed, url) {
      tinymce.plugins.mkShortcodeMce.theurl = url;
    },

    createControl: function(btn, e) {
      if (btn == 'mk_shortcodes_button') {
        var a = this;
        var btn = e.createSplitButton('mk_button', {
          title: 'Insert Shortcode',
          image: tinymce.plugins.mkShortcodeMce.theurl + '/masterkey-admin-icon.png',
          icons: false,
        });

        btn.onRenderMenu.add(function(c, b) {



          c = b.addMenu({
            title: 'Structure'
          });

          a.render(c, 'Row', 'row');
          a.render(c, 'Page Section', 'page-section');
          a.render(c, 'Custom Box', 'custom-box');
          a.render(c, 'Content Box', 'content-box');
          a.render(c, 'Column 1/2', '1/2');
          a.render(c, 'Column 1/3', '1/3');
          a.render(c, 'Column 1/4', '1/4');
          a.render(c, 'Column 1/6', '1/6');
          a.render(c, 'Column 2/3', '2/3');
          a.render(c, 'Column 3/4', '3/4');
          a.render(c, 'Column 5/6', '5/6');


          a.render(c, '1/2 + 1/2', '1/2-1/2');
          a.render(c, '1/3 + 1/3 + 1/3', '1/3-1/3-1/3');
          a.render(c, '1/4 + 1/4 + 1/4 + 1/4', '1/4-1/4-1/4-1/4');

          a.render(c, '2/3 + 1/3', '2/3-1/3');
          a.render(c, '3/4 + 1/4', '3/4-1/4');

          a.render(c, '1/4 + 3/4', '1/4-3/4');

          a.render(c, '1/4 + 1/2 + 1/4', '1/4-1/2-1/4');
          a.render(c, '1/6 + 3/4 + 1/6', '1/6-3/4-1/6');

          a.render(c, '1/6 + 1/6 + 1/6 + 1/6 + 1/6 + 1/6', '1/6-1/6-1/6-1/6-1/6-1/6');
          a.render(c, 'Divider', 'divider');
          a.render(c, 'Padding Divider', 'padding-divider');
          a.render(c, 'Clearboth', 'clearboth');



          c = b.addMenu({
            title: 'Images'
          });

          a.render(c, 'Image', 'image');
          a.render(c, 'Circle Frame Image', 'circle-frame-image');
          a.render(c, 'Moving Image', 'moving-image');
          a.render(c, 'Image Gallery', 'image-gallery');



          c = b.addMenu({
            title: 'Typography'
          });

          a.render(c, 'Fancy Title', 'fancy-title');
          a.render(c, 'Title Box', 'title-box');
          a.render(c, 'Text Block', 'text-block');
          a.render(c, 'Dropcaps', 'dropcaps');
          a.render(c, 'Tooltip', 'tooltip');
          a.render(c, 'Tabs', 'tabs');
          a.render(c, 'Accordion', 'accordion');
          a.render(c, 'Toggle', 'toggle');
          a.render(c, 'Blockquote', 'blockquote');
          a.render(c, 'Highlight Text', 'highlight');
          a.render(c, 'Custom List', 'custom-list');
          a.render(c, 'Font Icon', 'font-icon');
          a.render(c, 'Icon Box', 'icon-box');
          a.render(c, 'Button', 'button');
          a.render(c, 'Message Box', 'message-box');
          a.render(c, 'Mini Callout box', 'mini-callout');



          c = b.addMenu({
            title: 'Slideshows'
          });

          a.render(c, 'Image Slideshow', 'image-slideshow');
          a.render(c, 'Full Width Slideshow', 'full-width-slideshow');
          a.render(c, 'Laptop Slideshow', 'laptop-slideshow');
          a.render(c, 'LCD Slideshow', 'lcd-slideshow');
          a.render(c, 'Flexslider', 'flexslider');
          a.render(c, 'LayerSlider', 'layerslider');
          a.render(c, 'Testimonial Slideshow', 'testimonial-slideshow');



          c = b.addMenu({
            title: 'Presentation Tools'
          });


          a.render(c, 'Progress Bar', 'progress-bar');
          a.render(c, 'Chart', 'chart');
          a.render(c, 'Skill Meter', 'skill-meter');
          a.render(c, 'Pricing Tables', 'pricing-table');
          a.render(c, 'Table', 'table');
          a.render(c, 'Milestones', 'milestone');
          a.render(c, 'Event Countdown', 'event-countdown');



          c = b.addMenu({
            title: 'Loops'
          });

          a.render(c, 'Blog', 'blog');
          a.render(c, 'Blog Carousel', 'blog-carousel');
          a.render(c, 'Blog Showcase', 'blog-showcase');
          a.render(c, 'Portfolio', 'portfolio');
          a.render(c, 'Portfolio Carousel', 'portfolio-carousel');
          a.render(c, 'News', 'news');
          a.render(c, 'News Tab', 'newstab');
          a.render(c, 'FAQ', 'faq');
          a.render(c, 'Employees', 'employees');
          a.render(c, 'Clients', 'clients');



          c = b.addMenu({
            title: 'Socials'
          });


          a.render(c, 'Twitter Feeds', 'twitter-feeds');
          a.render(c, 'Flickr Feeds', 'flickr');
          a.render(c, 'Facebook Like', 'facebook-like');
          a.render(c, 'Tweetme button', 'tweetme');
          a.render(c, 'Google+ Button', 'googleplus');
          a.render(c, 'Pinterest button', 'pinterest');
          a.render(c, 'Social Networks', 'social-networks');
          a.render(c, 'Skype Number', 'skype');
          a.render(c, 'Contact Form', 'contact-form');
          a.render(c, 'Contact info', 'contact-info');
          a.render(c, 'Video Player', 'video-player');
          a.render(c, 'Audio Player', 'audio-player');
          a.render(c, 'Google Maps', 'google-maps');
          a.render(c, 'Advanced Google Maps', 'advanced-gmaps');



        });
        return btn;
      }
      return null;
    },

    render: function(ed, title, id) {
      ed.add({
        title: title,
        onclick: function() {



          if (id === '1/2') {
            tinyMCE.activeEditor.selection.setContent('[vc_column width="1/2"]Place Content Here[/vc_column]');
          }

          if (id === '1/3') {
            tinyMCE.activeEditor.selection.setContent('[vc_column width="1/3"]Place Content Here[/vc_column]');
          }

          if (id === '1/4') {
            tinyMCE.activeEditor.selection.setContent('[vc_column width="1/4"]Place Content Here[/vc_column]');
          }

          if (id === '1/6') {
            tinyMCE.activeEditor.selection.setContent('[vc_column width="1/6"]Place Content Here[/vc_column]');
          }

          if (id === '2/3') {
            tinyMCE.activeEditor.selection.setContent('[vc_column width="2/3"]Place Content Here[/vc_column]');
          }

          if (id === '3/4') {
            tinyMCE.activeEditor.selection.setContent('[vc_column width="3/4"]Place Content Here[/vc_column]');
          }

          if (id === '5/6') {
            tinyMCE.activeEditor.selection.setContent('[vc_column width="5/6"]Place Content Here[/vc_column]');
          }

          if (id === 'row') {
            tinyMCE.activeEditor.selection.setContent('[vc_row fullwidth="false"][vc_column width="1/1"]Place Content Here[/vc_column][/vc_row]');
          }

          if (id === 'page-section') {
            tinyMCE.activeEditor.selection.setContent('[mk_page_section attachment="scroll" bg_position="left top" bg_repeat="repeat" bg_stretch="false" enable_3d="false" speed_factor="4" bg_video="no" video_mask="false" video_opacity="0.6" top_shadow="false" section_layout="full" min_height="100" padding_top="10" padding_bottom="10" margin_bottom="0" first_page="false" last_page="false"][vc_column width="1/1"]Content Here[/vc_column][/mk_page_section]');
          }

          if (id === 'custom-box') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_custom_box bg_color="#f6f6f6" bg_position="left top" bg_repeat="repeat" bg_stretch="false" padding_vertical="30" padding_horizental="20" margin_bottom="10" min_height="100"][/mk_custom_box][/vc_column][/vc_row]');
          }


          if (id === 'content-box') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_content_box icon="moon-pushpin" heading="Title"][/mk_content_box][/vc_column][/vc_row]');
          }


          if (id === '1/2-1/2') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/2"][/vc_column][vc_column width="1/2"][/vc_column][/vc_row]');
          }

          if (id === '1/3-1/3-1/3') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/3"][/vc_column][vc_column width="1/3"][/vc_column][vc_column width="1/3"][/vc_column][/vc_row]');
          }

          if (id === '1/4-1/4-1/4-1/4') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/4"][/vc_column][vc_column width="1/4"][/vc_column][vc_column width="1/4"][/vc_column][vc_column width="1/4"][/vc_column][/vc_row]');
          }

          if (id === '2/3-1/3') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="2/3"][/vc_column][vc_column width="1/3"][/vc_column][/vc_row]');
          }

          if (id === '3/4-1/4') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="3/4"][/vc_column][vc_column width="1/4"][/vc_column][/vc_row]');
          }

          if (id === '1/4-3/4') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/4"][/vc_column][vc_column width="3/4"][/vc_column][/vc_row]');
          }

          if (id === '1/4-1/2-1/4') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/4"][/vc_column][vc_column width="1/2"][/vc_column][vc_column width="1/4"][/vc_column][/vc_row]');
          }

          if (id === '1/6-2/3-1/6') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/6"][/vc_column][vc_column width="2/3"][/vc_column][vc_column width="1/6"][/vc_column][/vc_row]');
          }

          if (id === '1/6-1/6-1/6-1/6-1/6-1/6') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/6"][/vc_column][vc_column width="1/6"][/vc_column][vc_column width="1/6"][/vc_column][vc_column width="1/6"][/vc_column][vc_column width="1/6"][/vc_column][vc_column width="1/6"][/vc_column][/vc_row]');
          }



          if (id === 'divider') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_divider style="double_dot" divider_width="full_width" margin_top="20" margin_bottom="20"][/vc_column][/vc_row]');
          }


          if (id === 'padding-divider') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_padding_divider size="40"][/vc_column][/vc_row]');
          }


          if (id === 'clearboth') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_clearboth][/vc_column][/vc_row]');
          }



          if (id === 'image') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_image src="IMAGE_URL" image_width="800" image_height="350" crop="true" lightbox="false" frame_style="simple" target="_self" caption_location="inside-image" align="left" margin_bottom="10"][/vc_column][/vc_row]');
          }


          if (id === 'circle-frame-image') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_circle_image src="IMAGE_URL" image_diameter="500" link="image_link"][/vc_column][/vc_row]');
          }


          if (id === 'moving-image') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_moving_image src="IMAGE_URL" axis="vertical" align="left" title="alt text" link="link url"][/vc_column][/vc_row]');
          }


          if (id === 'image-gallery') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_gallery images="6920,6918,6902,6896" column="3" height="500" frame_style="simple" disable_title="true"][/vc_column][/vc_row]');
          }


          if (id === 'fancy-title') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_fancy_title tag_name="h2" style="true" color="#393836" size="14" font_weight="inhert" margin_top="0" margin_bottom="18" font_family="none" align="left"]Text Goes Here[/mk_fancy_title][/vc_column][/vc_row]');
          }


          if (id === 'title-box') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_title_box color="#393836" highlight_color="#000000" highlight_opacity="0.3" size="18" line_height="34" font_weight="inherit" margin_top="0" margin_bottom="18" font_family="none" align="left"]Text Goes Here[/mk_title_box][/vc_column][/vc_row]');
          }


          if (id === 'text-block') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][vc_column_text disable_pattern="true" align="left" margin_bottom="0"]Text Goes Here[/vc_column_text][/vc_column][/vc_row]');
          }


          if (id === 'dropcaps') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_dropcaps style="simple-style"]D[/mk_dropcaps][/vc_column][/vc_row]');
          }


          if (id === 'tooltip') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_tooltip text="Text" tooltip_text="Tooltip Text" href="URL"][/vc_column][/vc_row]');
          }


          if (id === 'tabs') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][vc_tabs style="default" orientation="horizental" tab_location="left" container_bg_color="#fff"][vc_tab title="Tab 1" tab_id="1389303594-1-24"][/vc_tab][vc_tab title="Tab 2" tab_id="1389303594-2-84"][/vc_tab][/vc_tabs][/vc_column][/vc_row]');
          }


          if (id === 'accordion') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][vc_accordions style="fancy-style" action_style="accordion-action" open_toggle="0" container_bg_color="#fff"][vc_accordion_tab title="Section 1"][/vc_accordion_tab][vc_accordion_tab title="Section 2"][/vc_accordion_tab][/vc_accordions][/vc_column][/vc_row]');
          }


          if (id === 'toggle') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_toggle title="Title" icon="moon-box-remove" style="simple"]content[/mk_toggle][/vc_column][/vc_row]');
          }


          if (id === 'blockquote') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_blockquote style="quote-style" font_family="none" text_size="12" align="left"]Text[/mk_blockquote][/vc_column][/vc_row]');
          }


          if (id === 'highlight') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_highlight text="Text" text_color="#ffffff" bg_color="#e5ff3d" font_family="none"][/vc_column][/vc_row]');
          }

          if (id === 'custom-list') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_custom_list style="48" icon_color="#00c8d7" margin_bottom="30" align="none"]<ul><li>List Item</li><li>list Item</li></ul>[/mk_custom_list][/vc_column][/vc_row]');
          }

          if (id === 'font-icon') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_font_icons icon="moon-droplet" color="#00a4db" size="x-large" padding_horizental="4" padding_vertical="4" circle="true" circle_color="#f5f5f5" align="none" link="URL"][/vc_column][/vc_row]');
          }


          if (id === 'icon-box') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_icon_box title="Title" text_size="16" font_weight="inherit" read_more_txt="Read More Text" read_more_url="Read More URL" icon="moon-clock-7" style="simple_minimal" icon_size="small" rounded_circle="false" icon_location="left" circled="false" icon_color="#00c8d7" icon_circle_color="#00c8d7" box_blur="false" margin="30"]Box Content[/mk_icon_box][/vc_column][/vc_row]');
          }


          if (id === 'button') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_button dimension="three" size="medium" outline_skin="dark" bg_color="#00c8d7" text_color="light" icon="moon-quill" url="Button URL" target="_self" align="left" id="Buton ID" margin_top="0" margin_bottom="15"]Button text[/mk_button][/vc_column][/vc_row]');
          }

          if (id === 'message-box') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_message_box type="comment-message"]Content Goes Here[/mk_message_box][/vc_column][/vc_row]');
          }

          if (id === 'mini-callout') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_mini_callout title="Title" button_text="Button text" button_url="Button URL"]Content[/mk_mini_callout][/vc_column][/vc_row]');
          }

          if (id === 'image-slideshow') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_image_slideshow images="6920,6918,6902" image_width="770" image_height="350" effect="fade" animation_speed="700" slideshow_speed="7000" pause_on_hover="false" smooth_height="true" direction_nav="true"][/vc_column][/vc_row]');
          }


          if (id === 'full-width-slideshow') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_fullwidth_slideshow border_color="#eaeaea" attachment="scroll" bg_position="left top" enable_3d="false" speed_factor="4" images="6893,6888" effect="fade" animation_speed="700" slideshow_speed="7000" pause_on_hover="false" smooth_height="true" direction_nav="true"][/vc_column][/vc_row]');
          }


          if (id === 'laptop-slideshow') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_laptop_slideshow images="6984,6902,6896,6893,6888" size="full" animation_speed="700" slideshow_speed="7000" pause_on_hover="false"][/vc_column][/vc_row]');
          }

          if (id === 'lcd-slideshow') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_lcd_slideshow images="6968,6956" animation_speed="700" slideshow_speed="7000" pause_on_hover="false"][/vc_column][/vc_row]');
          }


          if (id === 'flexslider') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_flexslider count="10" slides="2729,2733,2734" order="ASC" orderby="menu_order" image_height="350" image_width="770" effect="fade" animation_speed="700" slideshow_speed="7000" pause_on_hover="false" smooth_height="true" direction_nav="true" caption_color="#ffffff" caption_bg_opacity="0.6"][/vc_column][/vc_row]');
          }


          if (id === 'layerslider') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_layerslider id="4"][/vc_column][/vc_row]');
          }



          if (id === 'testimonial-slideshow') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_testimonials title="Title" style="boxed" show_as="slideshow" column="3" skin="dark" count="10" order="ASC" orderby="menu_order"][/vc_column][/vc_row]');
          }


          if (id === 'progress-bar') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_skill_meter_chart title="Title" percent_1="0" color_1="#e74c3c" name_1="Skill 1 : Name" percent_2="0" color_2="#8c6645" name_2="Skill 2 : Name" percent_3="0" color_3="#265573" name_3="Skill 3 : Name" percent_4="0" color_4="#008b83" name_4="Skill 4 : Name" percent_5="0" color_5="#d96b52" name_5="Skill 5 : Name" percent_6="0" color_6="#82bf56" name_6="Skill 6 : Name" percent_7="0" color_7="#4ecdc4" name_7="Skill 7 : Name" default_text="Skill" center_color="#1e3641" default_text_color="#ffffff"][/vc_column][/vc_row]');
          }


          if (id === 'chart') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_chart percent="50" bar_color="#00c8d7" track_color="#ececec" line_width="10" bar_size="150" content_type="percent" icon="moon-alarm-2"][/vc_column][/vc_row]');
          }



          if (id === 'skill-meter') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_skill_meter title="Title" percent="50" color="#00c8d7"][/vc_column][/vc_row]');
          }


          if (id === 'pricing-table') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_pricing_table style="multicolor" table_number="4" order="ASC" orderby="menu_order"][/vc_column][/vc_row]');
          }


          if (id === 'table') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_table title="Title" style="style1"]<table width="100%"><thead><tr><th>Column 1</th><th>Column 2</th><th>Column 3</th><th>Column 4</th></tr></thead><tbody><tr><td>Item #1</td><td>Description</td><td>Subtotal:</td><td>$3.00</td></tr><tr><td>Item #2</td><td>Description</td><td>Discount:</td><td>$4.00</td></tr><tr><td>Item #3</td><td>Description</td><td>Shipping:</td><td>$7.00</td></tr><tr><td>Item #4</td><td>Description</td><td>Tax:</td><td>$6.00</td></tr><tr><td><strong>All Items</strong></td><td><strong>Description</strong></td><td><strong>Your Total:</strong></td><td><strong>$20.00</strong></td></tr></tbody></table>[/mk_table][/vc_column][/vc_row]');
          }


          if (id === 'milestone') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_milestone icon="moon-bell" icon_size="small" icon_color="#00c8d7" start="0" stop="100" speed="2000" prefix="Number Prefix" suffix="Number Suffix" text="Text Below Number" text_color="#999999"][/vc_column][/vc_row]');
          }


          if (id === 'event-countdown') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_countdown year="2013" month="january" day="1" hour="1" minute="1"][/vc_column][/vc_row]');
          }



          if (id === 'blog') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_blog style="modern" column="3" grid_image_height="350" count="10" offset="0" pagination="true" disable_meta="true" disable_lightbox="true" disable_comments_share="true" pagination_style="1" order="ASC" orderby="menu_order"][/vc_column][/vc_row]');
          }


          if (id === 'blog-carousel') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_blog_carousel view_all="*" count="10" enable_excerpt="false" offset="0" order="ASC" orderby="menu_order"][/vc_column][/vc_row]');
          }


          if (id === 'blog-showcase') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_blog_showcase offset="0" order="ASC" orderby="menu_order"][/vc_column][/vc_row]');
          }


          if (id === 'portfolio') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_portfolio style="classic" ajax="false" column="3" disable_excerpt="true" disable_permalink="true" count="10" sortable="true" offset="0" height="300" pagination="true" pagination_style="1" order="ASC" orderby="menu_order" target="_self"][/vc_column][/vc_row]');
          }


          if (id === 'portfolio-carousel') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_portfolio_carousel style="classic" view_all="*" count="10" show_items="4" offset="0" disable_title_cat="true" order="ASC" orderby="menu_order"][/vc_column][/vc_row]');
          }


          if (id === 'news') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_news count="10" offset="0" image_height="250" pagination="true" pagination_style="2" order="ASC" orderby="menu_order"][/vc_column][/vc_row]');
          }


          if (id === 'newstab') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_news_tab tab_title="News"][/vc_column][/vc_row]');
          }


          if (id === 'faq') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_faq style="fancy" sortable="true" count="50" offset="0" order="DESC" orderby="menu_order"][/vc_column][/vc_row]');
          }


          if (id === 'employees') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_employees style="simple" column="3" rounded_image="true" box_blur="false" count="10" offset="0" description="true" order="ASC" orderby="menu_order"][/vc_column][/vc_row]');
          }


          if (id === 'clients') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_clients count="10" order="ASC" orderby="menu_order" height="110" autoplay="true" target="_self"][/vc_column][/vc_row]');
          }


          if (id === 'twitter-feeds') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][vc_twitter twitter_name="Twitter name" tweets_count="5"][/vc_column][/vc_row]');
          }


          if (id === 'flickr') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][vc_flickr flickr_id="Flickr ID" count="6" thumb_size="s" type="user" display="latest"][/vc_column][/vc_row]');
          }

          if (id === 'facebook-like') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][vc_facebook type="standard"][/vc_column][/vc_row]');
          }


          if (id === 'tweetme') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][vc_tweetme type="horizontal"][/vc_column][/vc_row]');
          }


          if (id === 'googleplus') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][vc_googleplus annotation="inline"][/vc_column][/vc_row]');
          }


          if (id === 'pinterest') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][vc_pinterest][/vc_column][/vc_row]');
          }


          if (id === 'social-networks') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_social_networks size="small" style="rounded" margin="4" icon_color="#cccccc" align="left" facebook="#" twitter="#" rss="#" dribbble="#" digg="#" pinterest="#" flickr="#" google_plus="#" linkedin="#" blogger="#" youtube="#" last_fm="#" stumble_upon="#" tumblr="#" vimeo="#" wordpress="#" yelp="#" reddit="#" xing="#"][/vc_column][/vc_row]');
          }

          if (id === 'skype') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_skype display_number="Your Skype Number (Display)" number="Your Skype Number (exact number)"][/vc_column][/vc_row]');
          }


          if (id === 'contact-form') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_contact_form style="modern" skin="dark" email="#"][/vc_column][/vc_row]');
          }


          if (id === 'contact-info') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_contact_info title="#" phone="#" fax="#" email="#" address="#" person="#" company="#" skype="#" website="#"][/vc_column][/vc_row]');
          }


          if (id === 'video-player') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][vc_video title="#" link="#"][/vc_column][/vc_row]');
          }


          if (id === 'audio-player') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][mk_audio mp3_file="#" ogg_file="#" thumb="#" audio_author="#"][/vc_column][/vc_row]');
          }


          if (id === 'google-maps') {
            tinyMCE.activeEditor.selection.setContent('[vc_row][vc_column width="1/1"][vc_gmaps title="#" link="#" size="300" type="m" zoom="14" frame_style="simple"][/vc_column][/vc_row]');
          }


          if (id === 'advanced-gmaps') {
            tinyMCE.activeEditor.selection.setContent('');
          }


          return false;

        }
      });
    }

  });

  tinymce.PluginManager.add('mk_shortcodes', tinymce.plugins.mkShortcodeMce);

})();