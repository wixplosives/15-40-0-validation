import styles from './avatar.module.scss';
import cx from 'classnames';

export interface AvatarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Avatar = ({ className }: AvatarProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <img
                src="https://static.wixstatic.com/media/f2b188_ff87eb64176b4591b227bf9ccb2b948f~mv2.jpg/v1/fit/w_640,h_640/create an image of a cat human like.jpg.jpg"
                alt=""
            />
        </div>
    );
};
