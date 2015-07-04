<?php
/**
 * Class and Function List:
 * Function list:
 * - __construct()
 * - curl_get_contents()
 * - import_menus_locations()
 * - set_up_pages()
 * - include_appropriate_importer()
 * - import_theme_content()
 * - mk_process_theme_options_import()
 * - mk_process_widget_import()
 * - mk_available_widgets()
 * - mk_import_data()
 * - import()
 * Classes list:
 * - ContentImporter
 */
if (!defined('WP_LOAD_IMPORTERS')) define('WP_LOAD_IMPORTERS', true);
if (function_exists('curl_version')) {
        define('BASE_PATH', THEME_DIR_URI . "/demo-importer/data/");
} 
else {
        define('BASE_PATH', THEME_DIR . "/demo-importer/data/");
}
define('BASE_PATH_DIR', THEME_DIR . "/demo-importer/data/");
define('BASE_URL', get_template_directory_uri() . "/demo-importer/data/");
define('THEME_CONTENT_FILE_NAME', 'theme_content.xml');
define('WIDGETS_FILE_NAME', 'widget_data.wie');
define('OPTIONS_FILE_NAME', 'options.txt');
require_once ABSPATH . 'wp-admin/includes/import.php';
class ContentImporter
{
        private $template = null;
        private $theme_content_path = "";
        private $widget_content_path = "";
        private $layer_slider_content_path = "";
        function __construct($atts)
        {
                parse_str($atts, $options);
                $this->include_appropriate_importer();
                $this->template = $options['template'];
                $this->is_options = $options['options'];
                $this->is_widgets = $options['widgets'];
                $this->is_content = $options['contents'];
                $this->theme_content_path = BASE_PATH_DIR . $options['template'] . '/' . THEME_CONTENT_FILE_NAME;
                $this->theme_options_path = BASE_PATH . $options['template'] . '/' . OPTIONS_FILE_NAME;
                $this->widget_content_path = BASE_URL . $options['template'] . '/' . WIDGETS_FILE_NAME;
                $this->layer_slider_content_path = BASE_PATH . $options['template'] . '/layersliders/';
        }
        function try_curl_get_contents($url)
        {
                if (function_exists('curl_version')) {
                        $ch = curl_init($url);
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
                        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
                        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
                        $data = curl_exec($ch);
                        curl_close($ch);
                        return $data;
                } 
                else {
                    return file_get_contents($url);
                }
        }
        private function import_menus_locations()
        {
                if ($this->is_content == 'true') {
                        $locations = get_theme_mod('nav_menu_locations');
                        $menus = wp_get_nav_menus();
                        if ($menus) {
                                foreach ($menus as $menu) {
                                        if ($menu->name == 'Main Navigation' || $menu->name == 'Main' || $menu->name == 'Main Menu' || $menu->name == 'main') {
                                                $locations['primary-menu'] = $menu->term_id;
                                                echo '<li>Navigation locations is configured.</li>';
                                        }
                                }
                        }
                        set_theme_mod('nav_menu_locations', $locations);
                }
        }
        private function set_up_pages()
        {
                if ($this->is_content == 'true') {
                        $homepage = get_page_by_title('Homepage 1');
                        if (empty($homepage->ID)) {
                                $homepage = get_page_by_title('Homepage');
                                if (empty($homepage->ID)) {
                                        $homepage = get_page_by_title('Home');
                                }
                        }
                        
                        if (!empty($homepage->ID)) {
                                update_option('page_on_front', $homepage->ID);
                                update_option('show_on_front', 'page');
                                echo '<li>Default homepage is configured.</li>';
                        }
                        
                        $shop_page = get_page_by_title('Shop');
                        if (!empty($shop_page->ID)) {
                                update_option('woocommerce_shop_page_id', $shop_page->ID);
                                echo '<li>Shop Page is configured.</li>';
                        }
                }
        }
        private function include_appropriate_importer()
        {
                global $wpdb;
                
                if (!defined('WP_LOAD_IMPORTERS')) define('WP_LOAD_IMPORTERS', true);
                
                if (!class_exists('WP_Importer')) {
                        $wp_importer = ABSPATH . 'wp-admin/includes/class-wp-importer.php';
                        include $wp_importer;
                }
                if (!class_exists('WP_Import')) {
                        $wp_import = THEME_DIR . '/demo-importer/engine/wordpress-importer.php';
                        include $wp_import;
                }
        }
        private function import_theme_content()
        {
                
                if ($this->is_content == 'true') {
                        set_time_limit(0);
                        $importer = new WP_Import();
                        $importer->fetch_attachments = false;
                        ob_start();
                        $importer->import($this->theme_content_path);
                        ob_end_clean();
                        echo '<li>Template contents were imported.</li>';
                        return true;
                }
        }
        private function mk_process_theme_options_import()
        {
                if ($this->is_options == 'true') {
                        $import_data = $this->try_curl_get_contents($this->theme_options_path);
                        $data = unserialize(base64_decode($import_data));
                        
                        if (!empty($data)) {
                                unset($data['custom_js'],$data['twitter_consumer_key'],$data['twitter_consumer_secret'],$data['twitter_access_token'],$data['twitter_access_token_secret'],$data['typekit_id'],$data['analytics']);
                                update_option(THEME_OPTIONS, $data);
                                update_option(THEME_OPTIONS.'_imported', 'true');
                                echo '<li>Theme options are imported.</li>';
                                return true;
                        }
                }
        }
        
        private function mk_process_widget_import()
        {
                if ($this->is_widgets == 'true') {
                        $widgets_json = $this->widget_content_path;
                        $data = $this->try_curl_get_contents($widgets_json);
                        $data = json_decode($data);
                        $this->mk_import_data($data);
                }
        }
        function mk_available_widgets()
        {
                global $wp_registered_widget_controls;
                $widget_controls = $wp_registered_widget_controls;
                $available_widgets = array();
                foreach ($widget_controls as $widget) {
                        if (!empty($widget['id_base']) && !isset($available_widgets[ $widget['id_base']])) {
                                $available_widgets[ $widget['id_base']]['id_base'] = $widget['id_base'];
                                $available_widgets[ $widget['id_base']]['name'] = $widget['name'];
                        }
                }
                return apply_filters('mk_available_widgets', $available_widgets);
        }
        private function mk_import_data($data)
        {
                global $wp_registered_sidebars;
                $available_widgets = $this->mk_available_widgets();
                $widget_instances = array();
                foreach ($available_widgets as $widget_data) {
                        $widget_instances[ $widget_data['id_base']] = get_option('widget_' . $widget_data['id_base']);
                }
                if (empty($data) || !is_object($data)) {
                        wp_die(__('Import data could not be read. Please try a different file.', 'mk_framework') , '', array(
                                'back_link' => true
                        ));
                }
                $results = array();
                foreach ($data as $sidebar_id => $widgets) {
                        if ('wp_inactive_widgets' == $sidebar_id) {
                                continue;
                        }
                        if (isset($wp_registered_sidebars[ $sidebar_id ])) {
                                $sidebar_available = true;
                                $use_sidebar_id = $sidebar_id;
                                $sidebar_message_type = 'success';
                                $sidebar_message = '';
                        } 
                        else {
                                $sidebar_available = false;
                                $use_sidebar_id = 'wp_inactive_widgets';
                                $sidebar_message_type = 'error';
                                $sidebar_message = __('Sidebar does not exist in theme (using Inactive)', 'mk_framework');
                        }
                        $results[ $sidebar_id ]['name'] = !empty($wp_registered_sidebars[ $sidebar_id ]['name']) ? $wp_registered_sidebars[ $sidebar_id ]['name'] : $sidebar_id;
                        $results[ $sidebar_id ]['message_type'] = $sidebar_message_type;
                        $results[ $sidebar_id ]['message'] = $sidebar_message;
                        $results[ $sidebar_id ]['widgets'] = array();
                        foreach ($widgets as $widget_instance_id => $widget) {
                                $fail = false;
                                $id_base = preg_replace('/-[0-9]+$/', '', $widget_instance_id);
                                $instance_id_number = str_replace($id_base . '-', '', $widget_instance_id);
                                if (!$fail && !isset($available_widgets[ $id_base ])) {
                                        $fail = true;
                                        $widget_message_type = 'error';
                                        $widget_message = __('Site does not support widget', 'mk_framework');
                                }
                                $widget = apply_filters('mk_widget_settings', $widget);
                                if (!$fail && isset($widget_instances[ $id_base ])) {
                                        $sidebars_widgets = get_option('sidebars_widgets');
                                        $sidebar_widgets = isset($sidebars_widgets[ $use_sidebar_id ]) ? $sidebars_widgets[ $use_sidebar_id ] : array();
                                        $single_widget_instances = !empty($widget_instances[ $id_base ]) ? $widget_instances[ $id_base ] : array();
                                        foreach ($single_widget_instances as $check_id => $check_widget) {
                                                if (in_array("$id_base-$check_id", $sidebar_widgets) && (array)$widget == $check_widget) {
                                                        $fail = true;
                                                        $widget_message_type = 'warning';
                                                        $widget_message = __('Widget already exists', 'mk_framework');
                                                        break;
                                                }
                                        }
                                }
                                if (!$fail) {
                                        $single_widget_instances = get_option('widget_' . $id_base);
                                        $single_widget_instances = !empty($single_widget_instances) ? $single_widget_instances : array(
                                                '_multiwidget' => 1
                                        );
                                        $single_widget_instances[] = (array)$widget;
                                        end($single_widget_instances);
                                        $new_instance_id_number = key($single_widget_instances);
                                        if ('0' === strval($new_instance_id_number)) {
                                                $new_instance_id_number = 1;
                                                $single_widget_instances[ $new_instance_id_number ] = $single_widget_instances[0];
                                                unset($single_widget_instances[0]);
                                        }
                                        if (isset($single_widget_instances['_multiwidget'])) {
                                                $multiwidget = $single_widget_instances['_multiwidget'];
                                                unset($single_widget_instances['_multiwidget']);
                                                $single_widget_instances['_multiwidget'] = $multiwidget;
                                        }
                                        update_option('widget_' . $id_base, $single_widget_instances);
                                        $sidebars_widgets = get_option('sidebars_widgets');
                                        $new_instance_id = $id_base . '-' . $new_instance_id_number;
                                        $sidebars_widgets[ $use_sidebar_id ][] = $new_instance_id;
                                        update_option('sidebars_widgets', $sidebars_widgets);
                                        if ($sidebar_available) {
                                                $widget_message_type = 'success';
                                                $widget_message = __('Imported', 'mk_framework');
                                        } 
                                        else {
                                                $widget_message_type = 'warning';
                                                $widget_message = __('Imported to Inactive', 'mk_framework');
                                        }
                                }
                                $results[ $sidebar_id ]['widgets'][ $widget_instance_id ]['name'] = isset($available_widgets[ $id_base ]['name']) ? $available_widgets[ $id_base ]['name'] : $id_base;
                                $results[ $sidebar_id ]['widgets'][ $widget_instance_id ]['title'] = $widget->title ? $widget->title : __('No Title', 'mk_framework');
                                $results[ $sidebar_id ]['widgets'][ $widget_instance_id ]['message_type'] = $widget_message_type;
                                $results[ $sidebar_id ]['widgets'][ $widget_instance_id ]['message'] = $widget_message;
                        }
                }
                echo '<li>Widgets are imported.</li>';
        }
        public function import()
        {
                if (class_exists('WP_Importer') && class_exists('WP_Import')) {
                        $imported_message = '<ul>';
                        
                        if ($this->import_theme_content()) {
                                $this->import_menus_locations();
                                $this->set_up_pages();
                        }
                        $this->mk_process_theme_options_import();
                        $this->mk_process_widget_import();
                        
                        $imported_message.= '</ul>';
                        echo $imported_message;
                        
                        die();
                }
        }
}
