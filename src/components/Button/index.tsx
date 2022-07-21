import styled from "styled-components";

export const Button = styled.button.attrs((props) => ({
  className: props.className,
}))<{ disabled?: boolean }>`
  padding: 16px 32px;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  max-height: 52px;
  white-space: nowrap;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;

  /* identical to box height */

  letter-spacing: 0.03em;
  transition: 0.3s;

  &.primary {
    background: red;
    position: relative;
    color: #fff;

    a {
      color: #fff;
    }

    &:hover {
      background: red;
    }
  }

  &.dark {
    background: #333;
    color: #fff;
  }

  &.outlined {
    background: transparent;
    border: 1px solid #3d6fc7;
    color: #3d6fc7;

    &:hover {
      background: rgb(61 111 199 / 8%);
    }
  }

  &.icon-only {
    padding: 6px !important;
    svg {
      margin: 0px !important;
    }
  }
  &.icon {
    margin-right: 16px;
    svg {
      margin-right: 0px;
    }
  }
  &.icon-tiny {
    border-radius: 32px;
    padding: 4px 16px;
    text-align: center;

    svg {
      height: 16px;
      width: 16px;
      margin: 0px !important;
    }
  }

  &.sm {
    padding: 8px 24px;
    max-height: 38px;
    font-size: 14px;
  }

  &.gradient {
    background: red;

    &:hover {
      background-position: 100%;
    }
  }

  & svg,
  i {
    margin-right: 10px;
  }
  &.block {
    width: 100%;
  }

  &.rounded {
    border-radius: 32px !important;
  }
  &.success {
    background: #eafbec;
    color: #1a7f24;

    svg,
    path {
      fill: #1a7f24 !important;
    }
  }

  &.info {
    background: #fef5e7;
    color: #ab6a07;

    svg,
    path {
      fill: #ab6a07 !important;
    }
  }

  &.danger {
    background: rgba(235, 87, 87, 1);
    color: #fff;

    svg,
    path {
      fill: rgba(235, 87, 87, 1) !important;
    }
  }

  &.primary2 {
    background: #f8f7ff;
    background: linear-gradient(302.59deg, #a93ceb -21.04%, #6a64ff 124.16%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    svg,
    path {
      fill: #a93ceb !important;
    }
  }

  @media (max-width: 640px) {
    &.m-sm {
      padding: 8px 24px;
      max-height: 38px;
      font-size: 14px;
    }
  }
`;
