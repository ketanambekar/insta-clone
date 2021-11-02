import { USERS } from './users';

export const POSTSDATA = [
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2018/10/19/12/14/train-3758523_960_720.jpg",
		"user": USERS[0].user,
		"likes": 7801,
		"caption": "Train ride to Hogwarts",
		"profile_picture": USERS[0].image,
		"comments": [
			{
				user: "Albus_Potter",
				comment: "Cool"
			},
		]
	},
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_960_720.jpg",
		"user": USERS[1].user,
		"likes": 801,
		"caption": "Train ride to Hogwarts",
		"profile_picture": USERS[2].image,
		"comments": [
			
		]
	},

	{
		"imageUrl": "https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_960_720.jpg",
		"user": USERS[3].user,
		"likes": 801,
		"caption": "Train ride to Hogwarts",
		"profile_picture": USERS[3].image,
		"comments": [
			{
				user: "Albus_Potter",
				comment: "Cool"
			},
			{
				user: "TheLongBottom",
				comment: "Hope to see you in Herbology Hope to see you in Herbology"
			},
		]
	},

]
