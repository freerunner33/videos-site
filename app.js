var videos = [
	{
		tab: 'Hockey',
		name: 'Alex Ovechkin all 53 goals from 2014-2015 NHL season',
		id: 'em80X_J73UE'
	},
	{
		tab: 'Hockey',
		name: 'Ovechkin dekes his way to unbelievable goal',
		id: 'YzZAOrpzlas'
	},
	{
		tab: 'Hockey',
		name: 'Alex Ovechkin scores four goals against Lightning',
		id: 'bHwJ-Vcorio'
	},
	{
		tab: 'Hockey',
		name: 'Ovechkin bats the puck out of mid-air',
		id: 'AKq0dLG2Mls'
	},
	{
		tab: 'Hockey',
		name: 'Top 10 Goals of the 2014-15 NHL Regular Season',
		id: 'UriVmEXGOgA'
	},
	{
		tab: 'Parkour', 
		name: 'Star Wars Parkour - Jedi Free Running',
		id: 'P8-Bv7E3pcE' 
	},
	{
		tab: 'Parkour',
		name: 'Storm Origins - Concrete Circus Freerun Film',
		id: 'BIGYjCvu0go'
	},
	{
		tab: 'Parkour',
		name: 'The Worlds Best Parkour and Freerunning 2015 HD',
		id: 'ZGKAfqzYLvU'
	},
	{
		tab: 'Parkour',
		name: 'Best Parkour and Freerunning 2015',
		id: '_XZCtE8672g'
	},
	{
		tab: 'Parkour',
		name: 'Red Bull Art of Motion 2012 Santorini Highlights',
		id: 'mDlJ4uzih1c'
	},
	{
		tab: 'Parkour',
		name: 'Under the Same Sky',
		id: 'lL1pYqDCN38'
	}
]

function loadVideos(tab) {
	var selectedVideos = videos.filter(function(video) {
		return video.tab == tab
	})

	selectedVideos = selectedVideos.sort(function(a, b) {
		return (a.name < b.name ? -1 : 1)
	})

	var html = ''
	for (var i = 0; i < selectedVideos.length; i++) {
		html += '<a href=\'https://www.youtube.com/watch?v=' + selectedVideos[i].id + '\' target=\'_blank\' style=\'background-image: url(https://i.ytimg.com/vi/' + selectedVideos[i].id + '/hqdefault.jpg)\'><div><span>' + '</span></div></a>'
	}
	$('section#main').html(html)
}

function load() {
	loadVideos('Hockey')
	$('nav a').on('click', function() {
		loadVideos($(this).html())
		$('nav a.active').removeClass('active')
		$(this).addClass('active')
	})
}

$(document).ready(load)