type IconProps = {
  className?: string;
};

// Icons are loaded from Google Fonts (Material Icons) via a <link> in
// `src/app/layout.tsx`. The same component names map to the closest
// Google equivalents of the previous custom glyphs.
function MaterialIcon({ name, className }: IconProps & { name: string }) {
  const classes = ["material-icons", className].filter(Boolean).join(" ");
  return (
    <span className={classes} aria-hidden="true">
      {name}
    </span>
  );
}

export function ToolIcon(props: IconProps) {
  return <MaterialIcon {...props} name="electric_bolt" />;
}

export function ToolsIcon(props: IconProps) {
  return <MaterialIcon {...props} name="build" />;
}

export function DownloadIcon(props: IconProps) {
  return <MaterialIcon {...props} name="download" />;
}

export function DocIcon(props: IconProps) {
  return <MaterialIcon {...props} name="description" />;
}
