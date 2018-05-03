<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup templates
 */
?>
<div class="header">
    <div class="cont_nav">
      
        <figure class="logo" >
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
          <picture>
           <source srcset="sites/all/themes/ulima/img/escudoulima.png" media="(max-width: 770px)">
            <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />

          </picture>
        </a>
        </figure>
     

      
          <span class="hamb" style="z-index :10">
                  <span></span>
                <span></span>
                <span></span>
          </span>
         
        <nav >
          <?php if (!empty($primary_nav)): ?>
            <?php print render($primary_nav); ?>
          <?php endif; ?>
        
        </nav>
      
    </div>

  
  
    <?php print render($page['header']); ?>

      <div class="cont_msnh">
     <h4> <a href="/carreras"> Carrreras </a> > <?php print $title; ?></h4>
    <h1 ><?php print $title; ?></h1>
    <?php if($mensaje_introductorio != NULL) : ?>
    <h3><?php print $mensaje_introductorio; ?></h3>
     <?php endif; ?>
    </div>
  
  

   
  </div>

  
  <?php print $messages; ?>
      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
      <?php endif; ?>


<div class="main-container  item-carrera item_carr">
     <?php if (!empty($page['precontent'])): ?>
     
        <?php print render($page['precontent']); ?>
      
      <?php endif; ?>

     <section>
     
      <a id="main-content"></a>
     
  
    

      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>

      <?php if (!empty($page['datoscarrera'])): ?>
    	<div class="datos_carrera">
    	 <div class="cont_dcarrera">

         <?php print render($page['datoscarrera']); ?>
         </div>
         </div>
      <?php endif; ?>

         <?php if (!empty($page['post_content'])): ?>
    	<div class="testimonios">
    	

         <?php print render($page['post_content']); ?>
         </div>
         <?php endif; ?>
      <?php print render($page['content']); ?>

   
     
     
    </section>



 
</div>
 <?php if (!empty($page['comentarios'])): ?>
      <div class="lab">
      <?php print render($page['comentarios']); ?>
         </div>
    <?php endif; ?>

   <?php if (!empty($page['post_content2'])): ?>
    	<div class="list_carr">
    	<?php print render($page['post_content2']); ?>
         </div>
    <?php endif; ?>

<?php if (!empty($page['admision'])): ?>
  <div class="madmision">
    <?php print render($page['admision']); ?>
  </div>
<?php endif; ?>
<?php if (!empty($page['footer'])): ?>
  <footer>
    <?php print render($page['footer']); ?>
  </footer>
<?php endif; ?>
