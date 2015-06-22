# Require any additional compass plugins here.
require 'compass-h5bp'

# Set this to the root of your project when deployed:
http_path = "/"

css_dir = "css"
sass_dir = "sass"
images_dir = "img"
javascripts_dir = "js"

# Set up enviroment
project_type = :stand_alone
output_style = :compressed
line_comments = false
relative_assets = true

# Small hack for OSX - Update file permissions after saving
on_stylesheet_saved do |filename|
    $local_path_to_css_file = css_dir + '/' + File.basename(filename)

    File.chmod(0755,$local_path_to_css_file)
end


