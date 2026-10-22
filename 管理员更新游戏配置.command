#!/bin/zsh
cd "${0:A:h}"
python3 admin/update_config.py
echo ""
echo "配置已写入游戏包。现在可以关闭此窗口并打开 index.html。"
read "?按回车键退出…"
