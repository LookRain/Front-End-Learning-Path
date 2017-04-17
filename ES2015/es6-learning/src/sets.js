function hideMe1() {
    let items = new Set(['one', 'two', 'three', 'one']);
    console.log(items);

    console.log(items.size);

    console.log(items.add('four'));

    console.log(items.delete('two'));
    console.log(items);

    console.log(items.has('four'));

    items.forEach(item => console.log(item));

    // items.clear();
    console.log(items);

    console.log(items.values());
    for (let item of items) {
        console.log(item);
    }
}

let set = new Set(['php', 'javascript', 'vue', 'php']);
console.log([...set]); 
converted_set_arr = [...set].filter(tag => tag.length === 3);
console.log(converted_set_arr);
converted_set = new Set(converted_set_arr);
console.log(converted_set);

