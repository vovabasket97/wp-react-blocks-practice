<?php get_header(); ?>

<?php
$setPage = $GLOBALS['wp_query']->query_vars['paged'];
$per_page = $GLOBALS['wp_query']->query_vars['posts_per_page'];
$totalPages = $GLOBALS['wp_query']->max_num_pages;

$category = get_category(get_query_var('cat'));
$category_link = get_category_link($category);
?>

<main class="content container">
    <div class="block block-component block-clear block-blog" data-pagination data-pagination-perPage="<?php echo $per_page; ?>" data-pagination-pages="<?php echo $totalPages ?>" data-pagination-isReloading="<?php echo 'true' ?>" data-pagination-setPage="<?php echo $setPage ?>" data-pagination-redirectLink="<?php echo $category_link; ?>">
        <div class="block__text">
            <div class="heading">
                <?php echo $category->name; ?>
            </div>
        </div>
        <div class="blog">
            <div class="blog__row">
                <?php if (have_posts()) :
                    while (have_posts()) :
                        the_post();
                        get_template_part('parts/cards/block-card', '', get_the_ID());
                    endwhile;

                    wp_reset_postdata();

                else :

                    get_template_part('template-parts/content', 'none');

                endif;
                ?>
            </div>
            <div class="pagination">
            </div>
        </div>
    </div>

    <?php
    global $args;
    echo get_template_part('parts/blocks/youtube_latest', '', $args = get_fields(1522)['blocks'][0]);
    echo get_template_part('parts/blocks/top_articles', '', $args = array(
        'heading' => qtrans_use(qtrans_getLanguage(), '[:en]Top <span style="color: #E6620D">Articles</span>[:da]Top <span style="color: #E6620D">Artikler</span>[:]'),
    ));
    echo get_template_part('parts/blocks/form_call_request', '', $args = get_fields(1498)['blocks'][0]);
    ?>
</main>
<?php get_footer(); ?>