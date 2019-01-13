const med1 = {
    name: 'Panadol',
    dosage: 3,
    startDate: Date("2019-01-01"),
    endDate: null
}

const med2 = {
    name: 'Hydrocodone',
    dosage: 10,
    startDate: Date("2019-01-15"),
    endDate: null
}

const patient1 = {
    name: 'Alex Martin',
    address: '200 University Ave W',
    meds: [med1, med2],
    journal: {
        entry: [
        {
            date: Date("2019-01-10"),
            mood: 6,
            context: "Taking this pill makes me feel okay. Though it helps reduce one pain, it makes me feel very drowsy"
        },
        {
            date: Date("2019-01-12"),
            mood: 4,
            context: "The pain continues to grow"
        },
        {
            date: Date("2019-01-14"),
            mood: 2,
            context: "This medication is making me miserable"
        },
        {
            date: Date("2019-01-16"),
            mood: 3,
            context: "Feeling a little better, a lot more sharp pains though"
        },
        {
            date: Date("2019-01-18"),
            mood: 5,
            context: "Getting more used to the dosage, starting to feel a little better"
        },
        {
            date: Date("2019-01-20"),
            mood: 8,
            context: "Taking this new medication fixed reduced a lot of my pains"
        },
        {
            date: Date("2019-01-22"),
            mood: 9,
            context: "Haven't felt this good in a while"
        }
        ]
    }
    
}

const patient2 = {
    name: 'John Doe',
    address: '203 Lester St.',
    meds: [med1, med2],
    journal: {
        entry: [
        {
            date: Date("2019-01-05"),
            mood: 5,
            context: "Taking this pill has not made any impact on me"
        },
        {
            date: Date("2019-01-06"),
            mood: 8,
            context: "Starting to feel pretty good with this dosage, but the side-effects are affecting me greatly"
        },
        {
            date: Date("2019-01-08"),
            mood: 9,
            context: "The side-effects of the medication lessend significantly"
        },
        {
            date: Date("2019-01-10"),
            mood: 6,
            context: "Starting to feel like this medication isn't helping, feeling a little sore"
        },
        {
            date: Date("2019-01-11"),
            mood: 4,
            context: "Feeling really depressed and the side-effects are kicking in"
        },
        {
            date: Date("2019-01-12"),
            mood: 7,
            context: "Today felt pretty good, can't really explain why"
        },
        {
            date: Date("2019-01-18"),
            mood: 6,
            context: "Started a new perscription, doesn't feel too bad right now"
        },
        {
            date: Date("2019-01-20"),
            mood: 2,
            context: "Taking this new medication has caused many implications and I feel like I have been prescribed too high of a dosage"
        }
        ]
    }
    
}

const doctor1 = {
    name: 'Bob Sam',
    address: '2200 Eglinton Ave W',
    city: 'Mississauga',
    province: 'Ontario',
    email: 'first.last@gmail.com',
    patients: [patient1, patient2]
}