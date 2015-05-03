# opoopress-theme-tv
OpooPress 2.0 theme for TV,Movie resources website.

## How to use this theme?

1. Install theme by maven

  ```shell
  mvn op:theme -Dop.repos.enabled=true -DartifactId=opoopress-theme-tv
  ```
  or
  ```shell
  mvn op:theme -Dname=tv
  ```
1. Install theme from sources

  ```shell
  cd /path/to/mysite
  git clone https://github.com/opoopress/opoopress-theme-tv.git themes/tv
  mvn op:theme -Dname=tv
  ```