<?php
/**
 * Shared dashboard shell footer.
 *
 * @package GutSliderBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
	</main>

	<div class="gs-toasts" data-gs-toasts aria-live="polite" aria-atomic="true"></div>

	<div class="gs-savebar" data-gs-savebar aria-hidden="true">
		<div class="gs-savebar__inner">
			<span class="gs-savebar__dot" aria-hidden="true"></span>
			<span class="gs-savebar__text" data-gs-savebar-text></span>
			<div class="gs-savebar__actions">
				<button type="button" class="gs-btn gs-btn--ghost" data-gs-discard>
					<?php esc_html_e( 'Discard', 'slider-blocks' ); ?>
				</button>
				<button type="button" class="gs-btn gs-btn--primary" data-gs-save>
					<span class="gs-btn__spinner" aria-hidden="true"></span>
					<span class="gs-btn__label"><?php esc_html_e( 'Save changes', 'slider-blocks' ); ?></span>
					<kbd class="gs-kbd" data-gs-save-kbd>⌘S</kbd>
				</button>
			</div>
		</div>
	</div>
</div>
