import React from 'react';

import {assetUrl} from 'shared/lib/assetUrl';

import {TELEGRAM_URL} from 'shared/config/env';
import {useLandingContent} from 'shared/i18n';
import {FullBleedSection} from 'shared/layout/FullBleedSection';
import {Badge} from 'shared/ui/Badge';
import {Button} from 'shared/ui/Button';
import {FormField} from 'shared/ui/FormField';
import {Input} from 'shared/ui/Input';
import {PhoneInput} from 'shared/ui/PhoneInput';
import {Select} from 'shared/ui/Select';

import {useRegistrationForm} from '../../hooks/useRegistrationForm';
import styles from './Cta.module.scss';

export const Cta: React.FC = () => {
	const {cta, paymentOptions} = useLandingContent();
	const {data, errors, status, errorMessage, setField, submit, isSubmitting} = useRegistrationForm();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		void submit();
	};

	return (
		<FullBleedSection
			className={styles.section}
			data-testid="cta-section"
			id="register"
		>
			<div
				aria-hidden
				className={styles.glows}
			>
				<div className={styles.glowLayer1}>
					<img
						alt=""
						className={styles.glowImage}
						src={assetUrl('assets/cta/glow-1.svg')}
					/>
				</div>
				<div className={styles.glowLayer2}>
					<img
						alt=""
						className={styles.glowImage}
						src={assetUrl('assets/cta/glow-2.svg')}
					/>
				</div>
			</div>

			<div className={styles.inner}>
				<div className={styles.intro}>
					<Badge
						className={styles.badge}
						variant="dark"
					>
						{cta.badge}
					</Badge>

					<div className={styles.heading}>
						<h2 className={styles.title}>
							<span className={styles.titleLine1}>{cta.titleLine1}</span>
							<br />
							<span className={styles.titleLine2}>
								{cta.titleLine2Before}
								<span className={styles.titleAccent}>{cta.titleLine2Accent}</span>
								{cta.titleLine2After}
							</span>
						</h2>
						<p className={styles.subtitle}>{cta.subtitle}</p>
					</div>
				</div>

				{status === 'success' ? (
					<div className={styles.success}>
						<h3>{cta.form.successTitle}</h3>
						<p>{cta.form.successText}</p>
					</div>
				) : (
					<form
						className={styles.form}
						onSubmit={handleSubmit}
					>
						<div className={styles.row}>
							<FormField
								label={cta.form.name}
								labelClassName={styles.formLabel}
							>
								<Input
									error={errors.name}
									name="name"
									placeholder={cta.form.namePlaceholder}
									value={data.name}
									onChange={(e) => setField('name', e.target.value)}
								/>
							</FormField>
							<FormField
								label={cta.form.phone}
								labelClassName={styles.formLabel}
							>
								<PhoneInput
									error={errors.phone}
									name="phone"
									placeholder={cta.form.phonePlaceholder}
									value={data.phone}
									onChange={(e) => setField('phone', e.target.value)}
								/>
							</FormField>
						</div>

						<FormField
							label={cta.form.venue}
							labelClassName={styles.formLabel}
						>
							<Input
								error={errors.venue}
								name="venue"
								placeholder={cta.form.venuePlaceholder}
								value={data.venue}
								onChange={(e) => setField('venue', e.target.value)}
							/>
						</FormField>

						<FormField
							label={cta.form.payment}
							labelClassName={styles.formLabel}
						>
							<Select
								name="paymentType"
								options={paymentOptions}
								value={data.paymentType}
								onChange={(e) => setField('paymentType', e.target.value as 'individual' | 'legal')}
							/>
						</FormField>

						{errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

						<div className={styles.submitWrap}>
							<Button
								disabled={isSubmitting}
								fullWidth
								type="submit"
								variant="primary"
								withArrow
							>
								{isSubmitting ? cta.form.submitting : cta.form.submit}
							</Button>
							<p className={styles.formNote}>{cta.form.note}</p>
						</div>
					</form>
				)}

				<Button
					className={styles.telegramBtn}
					href={TELEGRAM_URL}
					variant="outlineDark"
				>
					{cta.telegram}
				</Button>
			</div>
		</FullBleedSection>
	);
};
