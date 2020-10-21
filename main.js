const app_bytes_raw = "GET/HTTP/1.1Host:tommitenkanen.netConnection:keep-aliveUpgrade-Insecure-Requests:1User-Agent:Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/86.0.4240.75Safari/537.36Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9Accept-Encoding:gzip,deflateAccept-Language:fi-FI,fi;q=0.9,en-US;q=0.8,en;q=0.7";
const splitted_text = app_bytes_raw.split('');
console.log(splitted_text);

// APPLICATION LAYER
 
const app_len = 456;
const app_c = '#CCCCCC';
 
const app_waffle = d3.select('.app_waffle');
const app_numbers = d3.range(app_len);
const letter = ['g', 'e', 't'];
 
app_waffle
  .selectAll('.block')
  .data(app_numbers)
  .enter()
  .append('div')
  .attr('class', 'block')
  .style('background-color', app_c)
  .style('opacity', 0)
  .style('outline', (d, i) => {
    if(i === 0 || i === 1 || i === 2) { 
			return '1px solid black';
    }
  })
  .transition()
  .delay((d, i) => { return i * 5; })
  .style('opacity', 1);;
 
// TRANSPORT LAYER

const tra_len = 20;
const tra_c = '#CCCCCC';

const tra_waffle = d3.select('.tra_waffle');
const tra_numbers = d3.range(tra_len);

tra_waffle
  .selectAll('.block')
  .data(tra_numbers)
  .enter()
  .append('div')
  .attr('class', 'block')
  .style('background-color', tra_c)
  .style('opacity', 0)
  .transition()
  .delay((d, i) => { return i * 20; })
  .style('opacity', 1);;
 
// NETWORK LAYER
 
const net_len = 20;
const net_c = '#CCCCCC';

const net_waffle = d3.select('.net_waffle');
const net_numbers = d3.range(net_len);

net_waffle
  .selectAll('.block')
  .data(net_numbers)
  .enter()
  .append('div')
  .attr('class', 'block')
  .style('background-color', net_c)
  .style('opacity', 0)
  .transition()
  .delay((d, i) => { return i * 20; })
  .style('opacity', 1);;

// LINK LAYER
 
const lin_len = 14;
const lin_c = '#CCCCCC';

const lin_waffle = d3.select('.lin_waffle');
const lin_numbers = d3.range(lin_len);

lin_waffle
  .selectAll('.block')
  .data(lin_numbers)
  .enter()
  .append('div')
  .attr('class', 'block')
  .style('background-color', lin_c)
  .style('opacity', 0)
  .transition()
  .delay((d, i) => { return i * 20; })
	.style('opacity', 1);


// TESTI

const letArray = ['A', 'B', 'C', 'D', 'E'];
const vohveli = d3.select('.vohveli');

vohveli
	.selectAll('.block')
	.data(letArray)
	.enter()
	.append('div')
	.attr('class', 'block')
	.style('background-color', '#CCCCCC')
	.text((d) => { return d; });

const tavut = vohveli.selectAll('div');

tavut
	.data(letArray)
	.enter()
	.text((d) => { 
		console.log(d);
		return d; });