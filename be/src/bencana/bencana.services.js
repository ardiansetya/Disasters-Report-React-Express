import { getAllData, getDataById,insertData, deleteData, updateData } from "./bencana.repository.js"

export const getAllDisaster = async (userId) => {
    return await getAllData(userId)
}

export const getDisasterById = async (id, userId) => {
    const disaster = await getDataById(id, userId);
    if (!disaster) {
        throw new Error('Disaster not found');
    }
    return disaster;
}

export const createDisaster = async (newDisasterData, userId) => {
    

    // Simpan data bencana baru
    const disaster = await insertData(newDisasterData, userId);
    return disaster;
}

export const editDisaster = async (id, newDisasterData, userId) => {
    // Validasi untuk memastikan data yang diperlukan ada
    if (!newDisasterData.reporterName || !newDisasterData.disasterType || !newDisasterData.location || !newDisasterData.description || !newDisasterData.date) {
        throw new Error('Missing required fields');
    }

    // Update disaster
    const disaster = await updateData(id, newDisasterData, userId);

    if (!disaster) {
        throw new Error('Disaster not found');
    }

    return disaster;
}

export const deleteDisaster = async (id, userId) => {
    const disaster = await deleteData(id, userId);
    return disaster;
}
