#!/bin/sh
set -eu

mkdir -p /commandhistory

touch /commandhistory/.zsh_history
touch /commandhistory/.bash_history

if [ ! -f /root/.zshrc ]; then
  touch /root/.zshrc
fi

if ! grep -q 'HISTFILE=/commandhistory/.zsh_history' /root/.zshrc; then
  cat >> /root/.zshrc <<'EOF'
export HISTFILE=/commandhistory/.zsh_history
export HISTSIZE=50000
export SAVEHIST=50000
setopt HIST_IGNORE_DUPS
setopt SHARE_HISTORY
EOF
fi

if [ ! -f /root/.bashrc ]; then
  touch /root/.bashrc
fi

if ! grep -q 'HISTFILE=/commandhistory/.bash_history' /root/.bashrc; then
  cat >> /root/.bashrc <<'EOF'
export HISTFILE=/commandhistory/.bash_history
export HISTSIZE=50000
export HISTFILESIZE=50000
shopt -s histappend
EOF
fi
