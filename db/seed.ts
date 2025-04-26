import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import { supabase } from './supabase';

const generateFeedback = () => {
    return faker.lorem.paragraphs(2);
}

const generateSeedData = () => {
    const feedbacks = [];
    for (let i = 0; i < 20; i++) {
        feedbacks.push({
            id: uuidv4(),
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            email: faker.internet.email(),
            feedback: generateFeedback(),
            created_at: faker.date.past()
        });
    }

    return feedbacks;
}
async function seed() {
    const seedData = generateSeedData();
    const { error } = await supabase
        .from('feedback')
        .insert(seedData);

    if (error) {
        console.error("Error inserting feedbacks:", error);
    } else {
        console.log(`Feedbacks inserted successfully!`);
    }
}

seed();
