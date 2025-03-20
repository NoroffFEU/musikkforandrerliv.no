import React from "react";
import { useTranslation } from "react-i18next";

const TestTranslations = () => {
    const { t, i18n } = useTranslation(); 

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center space-y-4">
            <h1 className="text-2xl font-extrabold">{t("title")}</h1>

            <p className="text-lg">{t("description")}</p>

            <div className="space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => handleLanguageChange("en")}
                >
                    {t("english")}
                </button>
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => handleLanguageChange("no")}
                >
                    {t("norwegian")}
                </button>
            </div>
        </div>
    );
};

export default TestTranslations;
