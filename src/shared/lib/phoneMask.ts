import type {Locale} from 'shared/i18n';

const RU_COUNTRY_CODE = '7';
const US_COUNTRY_CODE = '1';

const RU_PHONE_DIGITS = 11;
const US_PHONE_DIGITS = 11;

function extractDigits(value: string): string {
	return value.replace(/\D/g, '');
}

function normalizeDigits(digits: string, countryCode: string): string {
	if (!digits) {
		return '';
	}

	if (countryCode === RU_COUNTRY_CODE) {
		if (digits.startsWith('8')) {
			return (RU_COUNTRY_CODE + digits.slice(1)).slice(0, RU_PHONE_DIGITS);
		}

		if (digits.startsWith(RU_COUNTRY_CODE)) {
			return digits.slice(0, RU_PHONE_DIGITS);
		}

		return (RU_COUNTRY_CODE + digits).slice(0, RU_PHONE_DIGITS);
	}

	if (digits.startsWith(US_COUNTRY_CODE)) {
		return digits.slice(0, US_PHONE_DIGITS);
	}

	return (US_COUNTRY_CODE + digits).slice(0, US_PHONE_DIGITS);
}

export function getPhonePrefix(locale: Locale): string {
	return locale === 'ru' ? '+7 ' : '+1 ';
}

export function formatPhone(value: string, locale: Locale): string {
	const countryCode = locale === 'ru' ? RU_COUNTRY_CODE : US_COUNTRY_CODE;
	const digits = normalizeDigits(extractDigits(value), countryCode);

	if (!digits) {
		return '';
	}

	if (locale === 'ru') {
		const local = digits.slice(1);

		if (local.length <= 3) {
			return `+7 ${local}`;
		}

		if (local.length <= 6) {
			return `+7 ${local.slice(0, 3)} ${local.slice(3)}`;
		}

		if (local.length <= 8) {
			return `+7 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
		}

		return `+7 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6, 8)} ${local.slice(8, 10)}`;
	}

	const local = digits.slice(1);

	if (local.length <= 3) {
		return `+1 ${local}`;
	}

	if (local.length <= 6) {
		return `+1 ${local.slice(0, 3)} ${local.slice(3)}`;
	}

	return `+1 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6, 10)}`;
}

export function countPhoneDigits(value: string): number {
	return extractDigits(value).length;
}

export function isPhoneComplete(value: string, locale: Locale): boolean {
	const requiredDigits = locale === 'ru' ? RU_PHONE_DIGITS : US_PHONE_DIGITS;

	return countPhoneDigits(value) >= requiredDigits;
}
