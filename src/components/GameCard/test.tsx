import { screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '.';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  image: '/img/image5.png',
  price: 'R$ 235,00',
};

describe('<GameCard />', () => {
  it('should render the title', () => {
    const { container } = renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.image
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText('R$ 235,00');

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through',
    });

    expect(price).toHaveStyle({
      backgroundColor: theme.colors.secondary,
    });
  });

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard promotionalPrice="R$ 200,00" {...props} />);

    const price = screen.getByText('R$ 235,00');

    expect(price).toHaveStyle({
      textDecoration: 'line-through',
    });

    const promotionalPrice = screen.getByText('R$ 200,00');

    expect(promotionalPrice).not.toHaveStyle({
      textDecoration: 'line-through',
    });
  });
});
