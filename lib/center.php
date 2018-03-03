<?php

/**
 * Retrieves the root plugin path.
 *
 * @return string Root path to the newtify plugin.
 *
 * @since 1.0.0
 */
function newtify_dir_path() {
	return plugin_dir_path( dirname(__FILE__ ) );
}

/**
 * Retrieves a URL to a file in the newtify plugin.
 *
 * @param  string $path Relative path of the desired file.
 *
 * @return string       Fully qualified URL pointing to the desired file.
 *
 * @since 1.0.0
 */
function newtify_url( $path ) {
	return plugins_url( $path, dirname( __FILE__ ) );
}

/**
 * Initialize the Newtify Center script
 *
 * @since 1.0.0
 *
 * @param  string   $hook    Page
 */
function newtify_center_script_init( $hook ) {
	wp_register_script(
		'newtify-center',
		newtify_url( 'scripts/center/build/index.js' ),
		array( 'wp-date', 'moment', 'wp-element', 'wp-components', 'wp-data' ),
		filemtime( newtify_dir_path() . 'scripts/center/build/index.js' ),
		true
	);
	wp_register_style(
		'newtify-center',
		newtify_url( 'scripts/center/build/style.css' ),
		array( 'wp-components' ),
		filemtime( newtify_dir_path() . 'scripts/center/build/style.css' )
	);

	wp_enqueue_script( 'newtify-center' );
	wp_enqueue_style( 'newtify-center' );
}
add_action( 'admin_enqueue_scripts', 'newtify_center_script_init' );


/**
 * Renders the notification center container in the admin bar
 *
 * @since 1.0.0
 *
 * @param  string   $hook    Page
 */
function newtify_center_admin_bar_init( $wp_admin_bar ){
	// add a group node with a class "first-toolbar-group"
	$args = array(
		'id'    => 'newtify-center',
		'title' => '',
		'parent' => 'top-secondary',
	);

	$wp_admin_bar->add_node( $args );
}

add_action( 'admin_bar_menu', 'newtify_center_admin_bar_init', 0 );