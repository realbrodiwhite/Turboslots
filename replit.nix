{ pkgs }: {
  deps = [
    pkgs.nodePackages.express
    pkgs.nodePackages.react
    pkgs.nodePackages.react-dom
    pkgs.nodePackages.typescript
  ];
}