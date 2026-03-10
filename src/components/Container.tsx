import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export const Container = ({ children, className }: ContainerProps) => (
  <div className={`container-shell ${className ?? ""}`.trim()}>{children}</div>
);
