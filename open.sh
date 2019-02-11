#! /usr/bin/bash

# This is a comment
while true
do
  echo "Enter the first letters of the file to open :"
  read input
  find -name _*$input*.pcss -type f -exec code {} \;
done