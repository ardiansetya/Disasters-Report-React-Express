import { prisma } from "../db/index.js"

export const getAllData = async (userId) => {
    return await prisma.report.findMany({
        where: {
            userId // Menjelaskan secara eksplisit field yang digunakan
        },
        orderBy: {
            createdAt: 'desc' // Tambahkan pengurutan berdasarkan waktu pembuatan
        }
    });
}

export const getDataById = async (id,userId) => {
    return await prisma.report.findFirst({
        where: {
            id,
            userId
        }
    })
}

export const insertData = async (newDisasterData,userId) => {
    return await prisma.report.create({
       data: {
            reporterName: newDisasterData.reporterName,
            location: newDisasterData.location,
            disasterType: newDisasterData.disasterType,
            description: newDisasterData.description,
            date: newDisasterData.date,
            userId
       }
    })
}

export const updateData = async (id, newDisasterData, userId) => {
    return await prisma.report.update({
        where: {
            id,
            userId
        },
        data: {
            reporterName: newDisasterData.reporterName,
            location: newDisasterData.location,
            disasterType: newDisasterData.disasterType,
            description: newDisasterData.description,
            date: newDisasterData.date
        }
    })
}

export const deleteData = async (id, userId) => {
    return await prisma.report.delete({
        where: {
            id,
            userId
        }
    })
}