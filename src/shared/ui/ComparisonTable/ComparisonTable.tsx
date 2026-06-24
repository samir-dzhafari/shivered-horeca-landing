import React from 'react';

import styles from './ComparisonTable.module.scss';

export type ComparisonColumnVariant = 'cross' | 'check' | 'other' | 'ours';

export type ComparisonColumn = {
	key: string;
	header: string;
	variant?: ComparisonColumnVariant;
	className?: string;
};

export type ComparisonRow = {
	label: string;
	cells: Record<string, React.ReactNode>;
};

type ComparisonTableProps = {
	columns: ComparisonColumn[];
	rows: ComparisonRow[];
	className?: string;
};

export const ComparisonTable: React.FC<ComparisonTableProps> = ({columns, rows, className}) => {
	const gridTemplate = `var(--comparison-label-width, 1fr) ${columns.map(() => '1fr').join(' ')}`;

	const getColumnClassName = (col: ComparisonColumn) =>
		[col.variant && styles[col.variant], col.className].filter(Boolean).join(' ');

	return (
		<div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
			<div
				className={styles.desktopTable}
				style={{'--comparison-columns': gridTemplate} as React.CSSProperties}
			>
				<div className={styles.header}>
					<span />
					{columns.map((col) => (
						<span
							className={getColumnClassName(col)}
							key={col.key}
						>
							{col.header}
						</span>
					))}
				</div>
				{rows.map((row) => (
					<div
						className={styles.row}
						key={row.label}
					>
						<span className={styles.label}>{row.label}</span>
						{columns.map((col) => (
							<span
								className={getColumnClassName(col)}
								key={col.key}
							>
								{row.cells[col.key]}
							</span>
						))}
					</div>
				))}
			</div>

			<div className={styles.mobileCards}>
				{rows.map((row) => (
					<article
						className={styles.mobileCard}
						key={row.label}
					>
						<h4 className={styles.mobileCardTitle}>{row.label}</h4>
						{columns.map((col) => (
							<div
								className={styles.mobileCardRow}
								key={col.key}
							>
								<span className={styles.mobileCardLabel}>{col.header}</span>
								<span className={getColumnClassName(col)}>{row.cells[col.key]}</span>
							</div>
						))}
					</article>
				))}
			</div>
		</div>
	);
};
