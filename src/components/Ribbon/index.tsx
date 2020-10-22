import * as S from './styles';

export type RibbonColors = 'primary' | 'secondary';
export type RibbonSizes = 'normal' | 'small';

export type RibbonProps = {
  children: React.ReactNode;
  bgColor?: RibbonColors;
  size?: RibbonSizes;
};

const Ribbon = ({
  children,
  bgColor = 'primary',
  size = 'normal',
}: RibbonProps) => (
  <S.Wrapper bgColor={bgColor} size={size}>
    {children}
  </S.Wrapper>
);

export default Ribbon;
