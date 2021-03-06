import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from  './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BuyersListComponent } from './pages/buyers/buyers-list.component';
import { BuyersFormComponent } from './pages/buyers/buyers-form.component';
import { VendorsListComponent } from './pages/vendors/vendors-list.component';
import { VendorsFormComponent } from './pages/vendors/vendors-form.component';
import { CategoriesListComponent } from './pages/categories/categories-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form.component';
import { ProductsListComponent } from './pages/products/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form.component';
import { EmhVoucherListComponent } from './pages/emh-voucher/emh-voucher-list.component';
import { EmhVoucherFormComponent } from './pages/emh-voucher/emh-voucher-form.component';
import { EmhBeautyBoxListComponent } from './pages/emh-beauty-box/emh-beauty-box-list.component';
import { EmhBeautyBoxFormComponent } from './pages/emh-beauty-box/emh-beauty-box-form.component';
import { BloggersListComponent } from './pages/bloggers/bloggers-list.component';
import { BloggersFormComponent } from './pages/bloggers/bloggers-form.component';
import { NewsListComponent } from './pages/news/news-list.component';
import { NewsFormComponent } from './pages/news/news-form.component';
import { TransactionsListComponent } from './pages/transactions/transactions-list.component';
import { TransactionsFormComponent } from './pages/transactions/transactions-form.component';
import { RecurringOrdersListComponent } from './pages/recurring-orders/recurring-orders-list.component';
import { RecurringOrdersFormComponent } from './pages/recurring-orders/recurring-orders-form.component';
import { ReturnsListComponent } from './pages/returns/returns-list.component';
import { ReturnsFormComponent } from './pages/returns/returns-form.component';
import { OrdersListComponent } from './pages/orders/orders-list.component';
import { OrdersFormComponent } from './pages/orders/orders-form.component';
import { SuperAdministratorListComponent } from './pages/super-administrator/super-administrator-list.component';
import { SuperAdministratorFormComponent } from './pages/super-administrator/super-administrator-form.component';
import { ModeratorsListComponent } from './pages/moderators/moderators-list.component';
import { ModeratorsFormComponent } from './pages/moderators/moderators-form.component';
import { StaffSettingListComponent } from './pages/staff-setting/staff-setting-list.component';
import { StaffSettingFormComponent } from './pages/staff-setting/staff-setting-form.component';
import { AffiliationListComponent } from './pages/affiliation/affiliation-list.component';
import { AffiliationFormComponent } from './pages/affiliation/affiliation-form.component';
import { AdvertsListComponent } from './pages/adverts/adverts-list.component';
import { AdvertsFormComponent } from './pages/adverts/adverts-form.component';
import { MessageComponent } from './pages/message/message.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { MediaComponent } from './pages/media/media.component';
import { NewsLetterComponent } from './pages/newsletter/newsletter.component';
import { SlideshowListComponent } from './pages/slideshow/slideshow-list.component';
import { SlideshowFormComponent } from './pages/slideshow/slideshow-form.component';
import { PartnersListComponent } from './pages/partners/partners-list.component';
import { PartnersFormComponent } from './pages/partners/partners-form.component';
import { CollaborationComponent } from './pages/collaboration/collaboration.component';
import { ShippingSettingComponent } from './pages/shipping-setting/shipping-setting.component';
import { ShippingReportComponent } from './pages/shipping-report/shipping-report.component';
import { SubscriptionPlanListComponent } from './pages/subscription-plan/subscription-plan-list.component';
import { SubscriptionPlanFormComponent } from './pages/subscription-plan/subscription-plan-form.component';
import { PaymentsListComponent } from './pages/payments/payments-list.component';
import { PaymentsFormComponent } from './pages/payments/payments-form.component';
import { EMHTVComponent } from './pages/emhtv/emhtv.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { StoreLocationsListComponent } from './pages/store-locations/store-locations-list.component';
import { StoreLocationsFormComponent } from './pages/store-locations/store-locations-form.component';
import { LanguagesListComponent } from './pages/languages/languages-list.component';
import { LanguagesFormComponent } from './pages/languages/languages-form.component';
import { CurrenciesListComponent } from './pages/currencies/currencies-list.component';
import { CurrenciesFormComponent } from './pages/currencies/currencies-form.component';
import { StockStatusesListComponent } from './pages/stock-statuses/stock-statuses-list.component';
import { StockStatusesFormComponent } from './pages/stock-statuses/stock-statuses-form.component';
import { OrderStatusesListComponent } from './pages/order-statuses/order-statuses-list.component';
import { OrderStatusesFormComponent } from './pages/order-statuses/order-statuses-form.component';
import { SettingListComponent } from './pages/setting/setting-list.component';
import { SettingFormComponent } from './pages/setting/setting-form.component';
import { SocialLinksComponent } from './pages/social-links/social-links.component';
import { BadgeComponent } from './pages/badge/badge.component';
import { TaxListComponent } from './pages/tax/tax-list.component';
import { TaxFormComponent } from './pages/tax/tax-form.component';
import { RestorationComponent } from './pages/restoration/restoration.component';
import { DebugErrorComponent } from './pages/debug-error/debug-error.component';
import { StatisticsReportComponent } from './pages/statistics-report/statistics-report.component';
import { EnglishListComponent } from './pages/language-editor/english/english-list.component';
import { FrenchListComponent } from './pages/language-editor/french/french-list.component';
import { GermanListComponent } from './pages/language-editor/german/german-list.component';
import { SpanishListComponent } from './pages/language-editor/spanish/spanish-list.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		component: AdminComponent,
		data: {
			title: 'Dashboard',
			breadcrumb: [ ['Home', 'dashboard'], ['Dashboard', 'dashboard'] ]
		},
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent,
				data: {
					title: 'Dashboard111',
					breadcrumb: [ ['Home', 'dashboard'], ['Dashboard', 'dashboard'] ]
				}
			},
			{
				path: 'buyers',
				component: BuyersListComponent,
				data: {
					title: 'Buyers',
					breadcrumb: [ ['Home', 'dashboard'], ['Buyers', 'buyers'] ]
				}
			},
			{
				path: 'buyers/create',
				component: BuyersFormComponent,
				data: {
					title: 'Buyers',
					breadcrumb: [ ['Home', 'dashboard'], ['Buyers', 'buyers'] ]
				}
			},
			{
				path: 'vendors',
				component: VendorsListComponent,
				data: {
					title: 'Vendors',
					breadcrumb: [ ['Home', 'dashboard'], ['Vendors', 'vendors'] ]
				}
			},
			{
				path: 'vendors/create',
				component: VendorsFormComponent,
				data: {
					title: 'Vendors',
					breadcrumb: [ ['Home', 'dashboard'], ['Vendors', 'vendors'] ]
				}
			},
			{
				path: 'categories',
				component: CategoriesListComponent,
				data: {
					title: 'Categories',
					breadcrumb: [ ['Home', 'dashboard'], ['Categories', 'categories'] ]
				}
			},
			{
				path: 'categories/create',
				component: CategoriesFormComponent,
				data: {
					title: 'Categories',
					breadcrumb: [ ['Home', 'dashboard'], ['Categories', 'categories'] ]
				}
			},
			{
				path: 'products',
				component: ProductsListComponent,
				data: {
					title: 'Products',
					breadcrumb: [ ['Home', 'dashboard'], ['Products', 'products'] ]
				}
			},
			{
				path: 'products/create',
				component: ProductsFormComponent,
				data: {
					title: 'Products',
					breadcrumb: [ ['Home', 'dashboard'], ['Products', 'products'] ]
				}
			},
			{
				path: 'emh-voucher',
				component: EmhVoucherListComponent,
				data: {
					title: 'Emh Voucher',
					breadcrumb: [ ['Home', 'dashboard'], ['Emh Voucher', 'emh-voucher'] ]
				}
			},
			{
				path: 'emh-voucher/create',
				component: EmhVoucherFormComponent,
				data: {
					title: 'Emh Voucher',
					breadcrumb: [ ['Home', 'dashboard'], ['Emh Voucher', 'emh-voucher'] ]
				}
			},
			{
				path: 'emh-beauty-box',
				component: EmhBeautyBoxListComponent,
				data: {
					title: 'Emh Beauty Box',
					breadcrumb: [ ['Home', 'dashboard'], ['Emh Beauty Box', 'emh-beauty-box' ] ]
				}
			},
			{
				path: 'emh-beauty-box/create',
				component: EmhBeautyBoxFormComponent,
				data: {
					title: 'Emh Beauty Box',
					breadcrumb: [ ['Home', 'dashboard'], ['Emh Beauty Box', 'emh-beauty-box'] ]
				}
			},
			{
				path: 'products/create',
				component: ProductsFormComponent,
				data: {
					title: 'Products',
					breadcrumb: [ ['Home', 'dashboard'], ['Products', 'products'] ]
				}
			},
			{
				path: 'products',
				component: ProductsListComponent,
				data: {
					title: 'Products',
					breadcrumb: [ ['Home', 'dashboard'], ['Products', 'products'] ]
				}
			},
			{
				path: 'products/create',
				component: ProductsFormComponent,
				data: {
					title: 'Products',
					breadcrumb: [ ['Home', 'dashboard'], ['Products', 'products'] ]
				}
			},
			{
				path: 'bloggers',
				component: BloggersListComponent,
				data: {
					title: 'Bloggers',
					breadcrumb: [ ['Home', 'dashboard'], ['Bloggers', 'bloggers'] ]
				}
			},
			{
				path: 'bloggers/create',
				component: BloggersFormComponent,
				data: {
					title: 'Bloggers',
					breadcrumb: [ ['Home', 'dashboard'], ['Bloggers', 'bloggers'] ]
				}
			},
			{
				path: 'news',
				component: NewsListComponent,
				data: {
					title: 'News',
					breadcrumb: [ ['Home', 'dashboard'], ['News', 'news'] ]
				}
			},
			{
				path: 'news/create',
				component: NewsFormComponent,
				data: {
					title: 'News',
					breadcrumb: [ ['Home', 'dashboard'], ['News', 'news'] ]
				}
			},
			{
				path: 'transactions',
				component: TransactionsListComponent,
				data: {
					title: 'Transactions',
					breadcrumb: [ ['Home', 'dashboard'], ['Transactions', 'transactions'] ]
				}
			},
			{
				path: 'transactions/create',
				component: TransactionsFormComponent,
				data: {
					title: 'Transactions',
					breadcrumbb: [ ['Home', 'dashboard'], ['Transactions', 'transactions'] ]
				}
			},
			{
				path: 'recurring-orders',
				component: RecurringOrdersListComponent,
				data: {
					title: 'Recurring Orders',
					breadcrumb: [ ['Home', 'dashboard'], ['Recurring Orders', 'recurring-orders'] ]
				}
			},
			{
				path: 'recurring-orders/create',
				component: RecurringOrdersFormComponent,
				data: {
					title: 'Recurring Order',
					breadcrumb: [ ['Home', 'dashboard'], ['Recurring Orders', 'recurring-orders'] ]
				}
			},
			{
				path: 'returns',
				component: ReturnsListComponent,
				data: {
					title: 'Returns',
					breadcrumb: [ ['Home', 'dashboard'], ['Returns', 'returns'] ]
				}
			},
			{
				path: 'returns/create',
				component: ReturnsFormComponent,
				data: {
					title: 'Returns',
					breadcrumb: [ ['Home', 'dashboard'], ['Returns', 'returns'] ]
				}
			},
			{
				path: 'orders',
				component: OrdersListComponent,
				data: {
					title: 'Orders',
					breadcrumb: [ ['Home', 'dashboard'], ['Orders', 'orders'] ]
				}
			},
			{
				path: 'orders/create',
				component: OrdersFormComponent,
				data: {
					title: 'Orders',
					breadcrumb: [ ['Home', 'dashboard'], ['Orders', 'orders'] ]
				}
			},
			{
				path: 'super-administrator',
				component: SuperAdministratorListComponent,
				data: {
					title: 'Super Administrator',
					breadcrumb: [ ['Home', 'dashboard'], ['Super Administrator', 'super-administrator'] ]
				}
			},
			{
				path: 'super-administrator/create',
				component: SuperAdministratorFormComponent,
				data: {
					title: 'Super Administrator',
					breadcrumb: [ ['Home', 'dashboard'], ['Super Administrator', 'super-administrator'] ]
				}
			},
			{
				path: 'moderators',
				component: ModeratorsListComponent,
				data: {
					title: 'Moderators',
					breadcrumb: [ ['Home', 'dashboard'], ['Moderators', 'moderators'] ]
				}
			},
			{
				path: 'moderators/create',
				component: ModeratorsFormComponent,
				data: {
					title: 'Moderators',
					breadcrumb: [ ['Home', 'dashboard'], ['Moderators', 'moderators'] ]
				}
			},
			{
				path: 'staff-setting',
				component: StaffSettingListComponent,
				data: {
					title: 'Staff Setting',
					breadcrumb: [ ['Home', 'dashboard'], ['Staff Setting', 'staff-setting'] ]
				}
			},
			{
				path: 'staff-setting/create',
				component: StaffSettingFormComponent,
				data: {
					title: 'Staff Setting',
					breadcrumb: [ ['Home', 'dashboard'], ['Staff Setting', 'staff-setting'] ]
				}
			}, 
			{
				path: 'affiliation',
				component: AffiliationListComponent,
				data: {
					title: 'Affiliation',
					breadcrumb: [ ['Home', 'dashboard'], ['Affiliation', 'affiliation'] ]
				}
			},
			{
				path: 'affiliation/create',
				component: AffiliationFormComponent,
				data: {
					title: 'Affiliation',
					breadcrumb: [ ['Home', 'dashboard'], ['Affiliation', 'affiliation'] ]
				}
			},
			{
				path: 'adverts',
				component: AdvertsListComponent,
				data: {
					title: 'Adverts',
					breadcrumb: [ ['Home', 'dashboard'], ['Adverts', 'adverts'] ]
				}
			},
			{
				path: 'adverts/create',
				component: AdvertsFormComponent,
				data: {
					title: 'Adverts',
					breadcrumb: [ ['Home', 'dashboard'], ['Adverts', 'toggle'] ]
				}
			},
			{
				path: 'message',
				component: MessageComponent,
				data: {
					title: 'Message',
					breadcrumb: [ ['Home', 'dashboard'], ['Message', 'message'] ]
				}
			},
			{
				path: 'comments',
				component: CommentsComponent,
				data: {
					title: 'Comments',
					breadcrumb: [ ['Home', 'dashboard'], ['Comments', 'comments'] ]
				}
			},
			{
				path: 'media',
				component: MediaComponent,
				data: {
					title: 'Media',
					breadcrumb: [ ['Home', 'dashboard'], ['Media', 'media'] ]
				}
			},
			{
				path: 'newsletter',
				component: NewsLetterComponent,
				data: {
					title: 'NewsLetter',
					breadcrumb: [ ['Home', 'dashboard'], ['NewsLetter', 'newsletter'] ]
				}
			},
			{
				path: 'slideshow',
				component: SlideshowListComponent,
				data: {
					title: 'Slideshow',
					breadcrumb: [ ['Home', 'dashboard'], ['Slideshow', 'slideshow'] ]
				}
			},
			{
				path: 'slideshow/:id',
				component: SlideshowFormComponent
			},
			{
				path: 'partners',
				component: PartnersListComponent,
				data: {
					title: 'Partners',
					breadcrumb: [ ['Home', 'dashboard'], ['Partners', 'partners'] ]
				}
			},
			{
				path: 'partners/:id',
				component: PartnersFormComponent
			},
			{
				path: 'collaboration',
				component: CollaborationComponent,
				data: {
					title: 'Collaboration',
					breadcrumb: [ ['Home', 'dashboard'], ['Collaboration', 'collaboration'] ]
				}
			},
			{
				path: 'shipping-setting',
				component: ShippingSettingComponent,
				data: {
					title: 'Shipping',
					breadcrumb: [ ['Home', 'dashboard'], ['Shipping', 'shipping'] ]
				}
			},
			{
				path: 'shipping-report',
				component: ShippingReportComponent
			},
			{
				path: 'subscription-plan',
				component: SubscriptionPlanListComponent,
				data: {
					title: 'Subscription Plan',
					breadcrumb: [ ['Home', 'dashboard'], ['Subscription Plan', 'subscription-plan'] ]
				}
			},
			{
				path: 'subscription-plan/create',
				component: SubscriptionPlanFormComponent,
				data: {
					title: 'Subscription Plan',
					breadcrumb: [ ['Home', 'dashboard'], ['Subscription Plan', 'subscription-plan'] ]
				}
			},
			{
				path: 'payments',
				component: PaymentsListComponent,
				data: {
					title: 'Payments',
					breadcrumb: [ ['Home', 'dashboard'], ['Payments', 'payments'] ]
				}
			},
			{
				path: 'payments/create',
				component: PaymentsFormComponent,
				data: {
					title: 'Payments',
					breadcrumb: [ ['Home', 'dashboard'], ['Payments', 'payments'] ]
				}
			},
			{
				path: 'emh-tv',
				component: EMHTVComponent,
				data: {
					title: 'EMH TV',
					breadcrumb: [ ['Home', 'dashboard'], ['EMH TV', 'emhtv'] ]
				}
			},
			{
				path: 'landing-page',
				component: MaintenanceComponent,
				data: {
					title: 'Maintenance',
					breadcrumb: [ ['Home', 'dashboard'], ['Landing Page', 'landing-page'] ]
				}
			},
			{
				path: 'store-locations',
				component: StoreLocationsListComponent
			},
			{
				path: 'store-locations/create',
				component: StoreLocationsFormComponent
			},
			{
				path: 'languages',
				component: LanguagesListComponent
			},
			{
				path: 'languages/create',
				component: LanguagesFormComponent
			},
			{
				path: 'currencies',
				component: CurrenciesListComponent
			},
			{
				path: 'currencies/create',
				component: CurrenciesFormComponent
			},
			{
				path: 'stock-statuses',
				component: StockStatusesListComponent
			},
			{
				path: 'stock-statuses/create',
				component: StockStatusesFormComponent
			},
			{
				path: 'order-statuses',
				component: OrderStatusesListComponent
			},
			{
				path: 'order-statuses/create',
				component: OrderStatusesFormComponent
			},
			{
				path: 'setting',
				component: SettingListComponent
			},
			{
				path: 'setting/create',
				component: SettingFormComponent
			},
			{
				path: 'social-links',
				component: SocialLinksComponent
			}, 
			{
				path: 'badge',
				component: BadgeComponent
			},
			{
				path: 'tax',
				component: TaxListComponent
			},
			{
				path: 'tax/create',
				component: TaxFormComponent
			},
			{
				path: 'restoration',
				component: RestorationComponent
			},
			{
				path: 'debug-error',
				component: DebugErrorComponent
			},
			{
				path: 'statistics',
				component: StatisticsReportComponent
			},
			{
				path: 'language-editor/english',
				component: EnglishListComponent
			},
			{
				path: 'language-editor/french',
				component: FrenchListComponent
			},
			{
				path: 'language-editor/german',
				component: GermanListComponent
			},
			{
				path: 'language-editor/spanish',
				component: SpanishListComponent
			}
		]
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class AdminRoutingModule {
	constructor(private router: Router) {
	}
}