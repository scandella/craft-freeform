import { borderRadius, colors, spacings } from '@ff-client/styles/variables';
import styled from 'styled-components';

type WrapperProps = {
  lean?: boolean;
};

export const Sidebar = styled.div<WrapperProps>`
  position: relative;

  width: 300px;
  padding: ${({ lean }): string => (lean ? spacings.sm : spacings.lg)};

  border-bottom-left-radius: ${borderRadius.lg};
  box-shadow: inset -1px 0 0 0 rgb(154 165 177 / 25%);
  background: ${colors.gray050};
`;