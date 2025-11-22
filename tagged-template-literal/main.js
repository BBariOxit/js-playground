function highligh([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()] ,[first])
        .join('')
}
var tech = 'Javascript'
var your_name = 'Phan Thái Bảo'

const html = highligh`Hành trình học ${tech} của ${your_name}!`
console.log(html)

