{ pkgs }: {
  deps = [
    pkgs.turbo
    pkgs.express
    pkgs.nodemon
    pkgs.turborepo-cli
    pkgs.socket
  ];
}