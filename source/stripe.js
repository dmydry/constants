"use strict";

export const chargeId = "ch_000000";
export const tokenId = "tok_000000";

export const country = "US";

export const routingNumbers = {
	US: "110000000",
	CA: "11000-000",
	AU: "110000",
	JP: "110000"
};

export const currencies = {
	US: "usd",
	CA: "cad"
};

export const defaultCurrency = currencies[country];

export const cardNumbers = [
	"4242424242424242", // Visa
	"4012888888881881", // Visa
	"4000056655665556", // Visa (debit)
	"5555555555554444", // MasterCard
	"5200828282828210", // MasterCard (debit)
	"5105105105105100", // MasterCard (prepaid)
	"378282246310005",  // American Express
	"371449635398431",  // American Express
	"6011111111111117", // Discover
	"6011000990139424", // Discover
	"30569309025904",   // Diners Club
	"38520000023237",   // Diners Club
	"3530111333300000", // JCB
	"3566002020360505"  // JCB
];

export const cardErrors = [
	"4000000000000077", // Charge will succeed and funds will be added directly to your available balance (bypassing your pending balance).
	"4000000000000093", // Charge will succeed and domestic pricing will be used (other test cards use international pricing). This card is only significant in countries with split pricing.
	"4000000000000010", // With default account settings, charge will succeed but address_line1_check and address_zip_check will both fail.
	"4000000000000028", // With default account settings, charge will succeed but address_line1_check will fail.
	"4000000000000036", // With default account settings, charge will succeed but address_zip_check will fail.
	"4000000000000044", // With default account settings, charge will succeed but address_zip_check and address_line1_check will both be unavailable.
	"4000000000000101", // With default account settings, charge will succeed unless a CVC is entered, in which case cvc_check will fail and the charge will be declined.
	"4000000000000341", // Attaching this card to a Customer object will succeed, but attempts to charge the customer will fail.
	"4000000000000002", // Charge will be declined with a card_declined code.
	"4100000000000019", // Charge will be declined with a card_declined code and a fraudulent reason.
	"4000000000000127", // Charge will be declined with an incorrect_cvc code.
	"4000000000000069", // Charge will be declined with an expired_card code.
	"4000000000000119"  // Charge will be declined with a processing_error code.
];

export const accountNumbers = {
	US: [
		"000123456789", // Transfer will succeed.
		"000111111116", // Transfer will fail with a no_account code.
		"000111111113", // Transfer will fail with an account_closed code.
		"000222222227", // Transfer will fail with an insufficient_funds code.
		"000333333335", // Transfer will fail with a debit_not_authorized code.
		"000444444440"  // Transfer will fail with an invalid_currency code.
	],
	CA: [
		"000123456789", // Transfer will succeed.
		"000111111116", // Transfer will fail with a no_account code.
		"000111111113", // Transfer will fail with an account_closed code.
		"000222222227", // Transfer will fail with an insufficient_funds code.
		"000333333335", // Transfer will fail with a debit_not_authorized code.
		"000444444440"  // Transfer will fail with an invalid_currency code.
	],
	AU: [
		"000123456", // Transfer will succeed.
		"111111116", // Transfer will fail with a no_account code.
		"111111113", // Transfer will fail with an account_closed code.
		"222222227", // Transfer will fail with an insufficient_funds code.
		"333333335", // Transfer will fail with a debit_not_authorized code.
		"444444440"  // Transfer will fail with an invalid_currency code.
	],
	JP: [
		"00012345", // Transfer will succeed.
		"11111116", // Transfer will fail with a no_account code.
		"11111113", // Transfer will fail with an account_closed code.
		"22222227", // Transfer will fail with an insufficient_funds code.
		"33333335", // Transfer will fail with a debit_not_authorized code.
		"44444440"  // Transfer will fail with an invalid_currency code.
	],
	EU: [
		"DE89370400440532013000", // Transfer will succeed.
		"DE89370400440532013001", // Transfer will fail with a no_account code.
		"DE89370400440532013002", // Transfer will fail with an account_closed code.
		"DE89370400440532013003", // Transfer will fail with an insufficient_funds code.
		"DE89370400440532013004", // Transfer will fail with a debit_not_authorized code.
		"DE89370400440532013005"  // Transfer will fail with an invalid_currency code.
	]
};
