import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-restoration',
	templateUrl: './restoration.component.html',
	styleUrls: ['./restoration.component.scss']
})
export class RestorationComponent implements OnInit {

	backupList = [
		'oc_address',
		'oc_affiliate',
		'oc_affiliate_activity',
		'oc_affiliate_transaction',
		'oc_api',
		'oc_attribute',
		'oc_attribute_description',
		'oc_attribute_group',
		'oc_attribute_group_description',
		'oc_banner',
		'oc_banner_image',
		'oc_banner_image_description',
		'oc_category',
		'oc_category_description',
		'oc_category_filter',
		'oc_category_path',
		'oc_category_to_layout',
		'oc_category_to_store',
		'oc_country',
		'oc_coupon',
		'oc_coupon_category',
		'oc_coupon_history',
		'oc_coupon_product',
		'oc_currency',
		'oc_custom_field',
		'oc_custom_field_customer_group',
		'oc_custom_field_description',
		'oc_custom_field_value',
		'oc_custom_field_value_description',
		'oc_customer',
		'oc_customer_activity',
		'oc_customer_ban_ip',
		'oc_customer_group',
		'oc_customer_group_description',
		'oc_customer_history',
		'oc_customer_ip',
		'oc_customer_online',
		'oc_customer_reward',
		'oc_customer_transaction',
		'oc_download',
		'oc_download_description',
		'oc_event',
		'oc_extension',
		'oc_filter',
		'oc_filter_description',
		'oc_filter_group',
		'oc_filter_group_description',
		'oc_geo_zone',
		'oc_information',
		'oc_information_description',
		'oc_information_to_layout',
		'oc_information_to_store',
		'oc_language',
		'oc_layout',
		'oc_layout_module',
		'oc_layout_route',
		'oc_length_class',
		'oc_length_class_description',
		'oc_location',
		'oc_manufacturer',
		'oc_manufacturer_to_store',
		'oc_marketing',
		'oc_modification',
		'oc_openbay_faq',
		'oc_option',
		'oc_option_description',
		'oc_option_value',
		'oc_option_value_description',
		'oc_order',
		'oc_order_custom_field',
		'oc_order_fraud',
		'oc_order_history',
		'oc_order_option',
		'oc_order_product',
		'oc_order_recurring',
		'oc_order_recurring_transaction',
		'oc_order_status',
		'oc_order_total',
		'oc_order_voucher',
		'oc_product',
		'oc_product_attribute',
		'oc_product_description',
		'oc_product_discount',
		'oc_product_filter',
		'oc_product_image',
		'oc_product_option',
		'oc_product_option_value',
		'oc_product_recurring',
		'oc_product_related',
		'oc_product_reward',
		'oc_product_special',
		'oc_product_to_category',
		'oc_product_to_download',
		'oc_product_to_layout',
		'oc_product_to_store',
		'oc_recurring',
		'oc_recurring_description',
		'oc_return',
		'oc_return_action',
		'oc_return_history',
		'oc_return_reason',
		'oc_return_status',
		'oc_review',
		'oc_setting',
		'oc_stock_status',
		'oc_store',
		'oc_tax_class',
		'oc_tax_rate',
		'oc_tax_rate_to_customer_group',
		'oc_tax_rule',
		'oc_upload',
		'oc_url_alias',
		'oc_user',
		'oc_user_group',
		'oc_voucher',
		'oc_voucher_history',
		'oc_voucher_theme',
		'oc_voucher_theme_description',
		'oc_weight_class',
		'oc_weight_class_description',
		'oc_zone',
		'oc_zone_to_geo_zone',
	];

	constructor() { }

	ngOnInit() {
	}

}
