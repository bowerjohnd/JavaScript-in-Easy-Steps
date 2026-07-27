(function() {

    const system = 'Windows', suite = 'Office', pattern = /ice/i;

    console.log('Pattern "ice"');
    console.log('In ' + system + '? ' + pattern.test(system));
    console.log('In ' + suite + '? ' + pattern.test(suite));

    let result = pattern.exec(suite);
    if(result)
    {
        console.log('Found ' + result + ' at index ' + result.index);
    }
    else 
    {
        console.log('No Match Found');
    }

    let email = 'mike@example';
    const format = /.+\@.+\..+/;    // anything + @ anything + . anything
    console.log(email + ' Valid? ' + format.test(email));

    email += '.com';
    console.log(email + ' Valid? ' + format.test(email));

    console.log('jimmy.asdf.wysiwyg@onomatopoeia.worldwideweb Valid? ' 
        + format.test('jimmy.asdf.wysiwyg@onomatopoeia.worldwideweb'));

})()