// APPLICATION LAYER

const app_bytes_raw = "GET/HTTP/1.1Host:tommitenkanen.netConnection:keep-aliveUpgrade-Insecure-Requests:1User-Agent:Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/86.0.4240.75Safari/537.36Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9Accept-Encoding:gzip,deflateAccept-Language:fi-FI,fi;q=0.9,en-US;q=0.8,en;q=0.7";

const app_bytes_array = app_bytes_raw.split('');
 
const app_c = '#CCCCCC';
 
const app_waffle = d3.select('.app_waffle');
 
app_waffle
  .selectAll('.block')
  .data(app_bytes_array)
  .enter()
  .append('div')
  .attr('class', 'block')
  .style('background-color', app_c)
  .style('opacity', 1)
  // .style('opacity', 0)
  .style('outline', (d, i) => {
    if(i === 0 || i === 1 || i === 2) { 
			return '1px solid black';
    }
  })
  .transition()
  .delay((d, i) => { return i * 15; })
  .text((d) => { return d; });
 
// TRANSPORT LAYER

const tra_byt_raw = 'ddfc0050469b7e115851524250180044d4bd0000';
const tra_byt_array = [];

for(let i = 0; i < tra_byt_raw.length - 1; i++) {
  tra_byt_array.push(
    tra_byt_raw[i] + tra_byt_raw[i + 1]);
    i = i + 1;
}

const tra_c = '#CCCCCC';
const tra_waffle = d3.select('.tra_waffle');

tra_waffle
  .selectAll('.block')
  .data(tra_byt_array)
  .enter()
  .append('div')
  .attr('class', 'block')
  .style('background-color', tra_c)
  .text((d => { return d; }))
  .style('opacity', 0)
  .transition()
  .delay((d, i) => { return i * 20; })
  .style('opacity', 1);;
 
// NETWORK LAYER
 
const net_byt_raw = '450001f071ee40008006d6cf82e95488bc751c63';
const net_byt_array = [];

for(let i = 0; i < net_byt_raw.length - 1; i++) {
  net_byt_array.push(
    net_byt_raw[i] + net_byt_raw[i + 1]);
    i = i + 1;
}

const net_c = '#CCCCCC';
const net_waffle = d3.select('.net_waffle');

net_waffle
  .selectAll('.block')
  .data(net_byt_array)
  .enter()
  .append('div')
  .attr('class', 'block')
  .style('background-color', net_c)
  .text((d) => { return d; })
  .style('opacity', 0)
  .transition()
  .delay((d, i) => { return i * 20; })
  .style('opacity', 1);;

// LINK LAYER
 
const lin_byt_raw = '00005e000101183da2f31c2c0800';
const lin_byt_array = [];

for(let i = 0; i < lin_byt_raw.length - 1; i++) {
  lin_byt_array.push(
    lin_byt_raw[i] + lin_byt_raw[i + 1]);
    i = i + 1;
}

const lin_c = '#CCCCCC';
const lin_waffle = d3.select('.lin_waffle');

lin_waffle
  .selectAll('.block')
  .data(lin_byt_array)
  .enter()
  .append('div')
  .attr('class', 'block')
  .style('background-color', lin_c)
  .text((d) => { return d; })
  .style('opacity', 0)
  .transition()
  .delay((d, i) => { return i * 20; })
  .style('opacity', 1);
  
// STREAM

const stream_data = [
  {
    id: 0,
    source: 'left',
    protocol: 'DNS'
  },
  {
    id: 1,
    source: 'right',
    protocol: 'TCP'
  },
  {
    id: 0,
    source: 'left',
    protocol: 'DNS'
  },
  {
    id: 1,
    source: 'right',
    protocol: 'TCP'
  },
  {
    id: 0,
    source: 'left',
    protocol: 'DNS'
  },
  {
    id: 1,
    source: 'right',
    protocol: 'TCP'
  }
];

const stream_waffle = d3.select('.stream_waffle');
stream_waffle
  .selectAll('.block-bg')
  .data(stream_data)
  .enter()
  .append('div')
  .attr('class', d =>
    d.source === 'left' ? 'block-bg l' : 'block-bg r'
  )
  .append('div')
  .attr('class', d => 
    d.source === 'left' ? 'block left' : 'block right' 
  )
  // .text(d => d.protocol)
  .style('background-color', '#CCCCCC');
  // .style('outline', d =>
    // d.protocol === 'DNS' ? '1px solid blue' : '1px solid red'
  // );

const tärkeät = stream_data.filter(d => d.id === 0);
console.log(tärkeät);
