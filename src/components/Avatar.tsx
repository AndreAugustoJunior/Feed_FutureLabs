import styles from "./Avatar.module.css";

interface IAvatarProps{hasBorder : boolean , imageURL: string }

export function Avatar({ hasBorder = true,imageURL }: IAvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={imageURL}
    />
  );
}
