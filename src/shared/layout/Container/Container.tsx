import React from 'react';

import styles from './Container.module.scss';

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
	as?: 'div' | 'section';
};

export const Container: React.FC<ContainerProps> = ({children, className, as: Tag = 'div'}) => {
	return <Tag className={[styles.container, className].filter(Boolean).join(' ')}>{children}</Tag>;
};
