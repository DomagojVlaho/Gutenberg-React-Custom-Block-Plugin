<?php if (! empty(get_field('main_usluge_repeater', 'option'))) { ?>
    <?php $content_sections = get_field('main_usluge_repeater', 'option'); ?>
    <div class="main-services-grid alternating-services">
        <?php 
            $counter = 0;
            $number_of_sections = count($content_sections);
        ?>
        <?php foreach($content_sections as $content_section) { ?>
            <?php 
                $usluga_title = $content_section['usluga']['title']; 
                $usluga_url = $content_section['usluga']['url']; 
            ?>
                <div class="services-item <?php if($counter % 2 === 0) { echo 'service-left'; } else { echo 'service-right'; } ?>">
                    <div class="content-image-wrapper service-icon-wrapper">
                        <?php if (!empty( $content_section['ikona_usluge'])) { ?>
                            <?php $image_url = $content_section['ikona_usluge']['url']; ?>
                            <img src="<?php echo $image_url; ?>">
                        <?php } else { ?>
                            <?php $image_url = wp_get_attachment_url(4476); ?>
                            <img src="<?php echo $image_url; ?>">
                        <?php } ?>
                    </div>
                    <div class="services-content">
                        <h3><?php echo $usluga_title; ?></h3>
                        <?php if (!empty( $content_section['kratki_opis_usluge'])) { ?>
                            <div style="display:none;"><?php echo $content_section['kratki_opis_usluge']; ?></div>
                        <?php } ?>
                        <div class="child-pages">
                        <?php 
                            $parent_category_page_id = url_to_postid($usluga_url);
                            $args = array(
                                'child_of' => $parent_category_page_id,
                                'sort_column' => 'post_date', 
                                'sort_order' => 'ASC' // Or 'DESC'
                            );
                            
                            $child_pages = get_pages($args);
                        ?>
                            <?php foreach ($child_pages as $page) { ?>
                                <div class="child-page">
                                    <?php 
                                    $child_page_id = $page->ID;
                                    $child_page_url = get_permalink($child_page_id);
                                    $child_page_icon = get_field('ikona_usluge', $child_page_id); 
                                    ?>
                                    <?php if(!empty($child_page_icon)) { ?>
                                        <span class="child-service-icon"><img src="<?php echo $child_page_icon['url']; ?>"></span>
                                    <?php } else { ?>
                                        <span class="child-service-icon"><img src="https://mindlab.kontra.page/wp-content/uploads/2024/05/icon_Opustenost.svg"></span>
                                    <?php } ?>
                                    <a href="<?php echo $child_page_url; ?>"><h4><?php echo $page->post_title; ?></h4></a>
                                </div>
                                
                            <?php } ?>
                        </div>
                    </div>
                </div>				
            <?php $counter++; ?>
        <?php } ?>
    </div>
<?php } ?>