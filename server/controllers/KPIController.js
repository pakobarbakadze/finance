import KPI from "../models//KPIModel.js";

const getKPI = async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getKPI };
