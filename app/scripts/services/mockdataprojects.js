'use strict';

/**
 * @ngdoc service
 * @name project-tomato.mockDataProjects
 * @description
 * # mockDataProjects
 * Constant in the project-tomato.
 */
angular.module('project-tomato')
	.constant('mockDataProjects', [
		{
			id: '1',
			projectName: 'Project Tomato',
			image: 'images/data/connection-500.jpg',
			summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque bibendum augue, id ultrices arcu dapibus eu. Curabitur mattis imperdiet magna id consequat. Morbi sem.',
			talentRequests: [
				{
					type: 'IT programming',
					description: 'Looking for an experienced marketer who has experience in dealing with different channels of digital marketing e.g. Ad-word maximisation, social media marketing etc.'
				},
				{
					type: 'Digital marketing',
					description: 'Looking for an experienced technical architect to advise the best approach to create a secure and robust back-end system'
				},
				{
					type: 'Technical architect',
					description: 'Looking for an experienced technical architect to advise the best approach to create a secure and robust back-end system'
				}
			],
			talentExchanges: [
				'Lifelong invitation to company Christmas parties',
				'Full lifelong membership of Project Tomato platform even if subscription model changes',
				'Written and/or verbal reference for job applications'
			],
			location: 'Sydney, NSW',
			industry: 'Technology',
			startDate: '2016-03-05T00:00:00.000Z',
			stage: '3',
			background: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor risus, non gravida mauris maximus eu. Suspendisse potenti. Vivamus consectetur, mauris quis efficitur egestas, sapien sed.',
			why: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at eleifend lorem. Proin vel vulputate ex. Nullam pretium purus at scelerisque aliquam. Sed interdum arcu sit amet vulputate cursus nullam.',
			how: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel enim diam. Suspendisse condimentum magna in mauris semper, ac congue turpis elementum. Maecenas congue nisl lorem. Ut massa nunc.',
			what: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut nunc sapien. Sed non molestie dolor. Suspendisse vel turpis arcu. Donec at vestibulum lectus, blandit malesuada velit. Quisque amet.',
			members: [{
				name: 'John Smith',
				position: 'Innovations Director',
				image: 'images/data/p1.jpg',
				description: 'A professional Dentist and the proud founder of a product innovation platform called Zion Dental. He brings expertise in the area of product innovation, MVP development and patent requirements.'
			}, {
				name: 'Ben Jackson',
				position: 'Strategic Director',
				image: 'images/data/p2.jpg',
				description: 'A strategy consultant from Accenture and a qualified Pharmacist. Kevin has expertise in the area of business transformation program, business process improvement, and digital strategies.'
			}, {
				name: 'Kenny White',
				position: 'Business Director',
				image: 'images/data/p3.jpg',
				description: 'A market analyst from IDC and a qualified Pharmacist. Joseph brings to the table skills in the area of technical architecture, market scoping/sizing, and business development.'
			}],
			whatsNext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium urna mi, at malesuada massa viverra et. Nam vehicula ante sed lacus pretium vehicula. Morbi magna nunc, hendrerit in tincidunt sed.',
		},

		{
			id: '2',
			projectName: 'Train of thought',
			image: 'images/data/train-of-thought.jpg',
			summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices dui at velit pulvinar interdum. Nullam fringilla, nulla vitae placerat viverra, est mi suscipit enim.',
			talentRequests: [
				{
					type: 'Transport logistics',
					description: 'Looking for a Transport Professional to join our Highly Motivated Team to manage one of our Major Clients.'
				},
				{
					type: 'Finance & Accounting',
					description: 'Looking for a financial accountant with experience in the financial services industry to join a great supportive team.'
				}
			],
			talentExchanges: [
				'Lifelong invitation to company Christmas parties',
				'Full lifelong membership of Train of thought platform even if subscription model changes',
				'Written and/or verbal reference for job applications'
			],
			location: 'Sydney, NSW',
			industry: 'Technology',
			startDate: '2011-02-05T00:00:00.000Z',
			stage: '4',
			background: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a metus magna. Proin sed auctor ex. Sed nec metus in diam pretium posuere sit amet vel erat. Fusce sagittis est vel metus posuere.',
			why: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius, mi eget elementum feugiat, velit eros feugiat magna, id faucibus justo mauris id sem. In at rutrum metus. Proin consectetur nisi id.',
			how: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum, libero at pretium vehicula, ex tortor blandit tortor, blandit luctus felis neque et augue. Vestibulum a velit in massa cras amet.',
			what: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula libero vel nisi fringilla mollis. Ut sed magna augue. Maecenas tempor mauris tellus, nec commodo nulla tristique eu amet.',
			members: [{
				name: 'Mark Anderson',
				position: 'Co-Founder',
				image: 'images/data/p4.jpg',
				description: 'Mark Anderson is an American computer programmer, Internet entrepreneur, and philanthropist. He is the chairman, chief executive, and co-founder of a social networking website.'
			}, {
				name: 'Joe Williams',
				position: 'Co-Founder',
				image: 'images/data/p5.jpg',
				description: 'Joe Williams is an American professional basketball player for the Miami Heat of the National Basketball Association. He has established himself as one of the most well-known and popular players in the league.'
			}, {
				name: 'Ricky Brown',
				position: 'Business Director',
				image: 'images/data/p6.jpg',
				description: 'Ricky Brown is a Canadian singer and songwriter. After a talent manager discovered him through his YouTube videos covering songs in 2007, Brown released his debut EP in late 2010.'
			}],
			whatsNext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam leo augue, ultrices vel turpis nec, laoreet mattis enim. Nulla at nisi vel odio condimentum laoreet non vitae urna. Praesent cursus sed.'
		}
	]);

