import styles from './button.module.scss';
import cx from 'classnames';

export interface ButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Button = ({ className }: ButtonProps) => {
    return <div className={cx(styles.root, className)}>Button</div>;
};
