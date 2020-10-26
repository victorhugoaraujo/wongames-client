import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from '@styled-icons/material-outlined';
import Button from 'components/Button';
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';
import * as S from './styles';

export type GameCardProps = {
  image: string;
  title: string;
  developer: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: React.ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const GameCard = ({
  image,
  title,
  developer,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary',
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon size={ribbonSize} bgColor={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={image} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default GameCard;
