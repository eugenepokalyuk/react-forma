import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
        level: 3,
        experience: 1200,
        goal: 'Похудеть до 96 кг',
        tasks: [
            { emoji: '🥑', name: 'Обед', time: 'до 14:00', calories: 400, xp: 400 },
            { emoji: '👟', name: 'Прогулка', time: '4000 шагов', xp: 500 },
        ],
        nutrition: 1200,
        liquid: 800,
        steps: 2400,
    };

const userSlice = createSlice({
    name: 'user',
    
    initialState: initialValues,
    
    reducers: {
        updateNutrition: (state, action) => {
            state.nutrition = action.payload;
        },
        
        updateLiquid: (state, action) => {
            state.liquid = action.payload;
        },
        
        updateSteps: (state, action) => {
            state.steps = action.payload;
        },
    },
});

export const { updateNutrition, updateLiquid, updateSteps } = userSlice.actions;

export default userSlice.reducer;
