echo 'Build done'
echo 'Copy all js file on ./dist/components to ./dist for faster import'
cp ./dist/components/**/*.js ./dist
echo 'Copy done'
echo 'Repair import'
for FILE in `find ./dist -depth 1 -name '*.js'`
do
    echo $FILE
    sed -i '' 's/\"\.\.\/\.\.\/empty-box/\"\.\/empty-box/g' $FILE
    sed -i '' 's/\"\.\.\/\.\.\/_rollupPluginBabelHelpers/\"\.\/_rollupPluginBabelHelpers/g' $FILE
done    