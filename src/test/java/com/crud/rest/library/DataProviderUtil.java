/**
 * 
 */
package com.crud.rest.library;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;



/**
 * @author Archana
 *
 */
public class DataProviderUtil {

	public static List<Map<String,String>> validateUserData() {
		List<Map<String,String>> dataProviderObj = new ArrayList<Map<String,String>>();
		dataProviderObj = createDataForDP(Constants.EXCEL_FILE, Constants.USERS_DATA);
		return dataProviderObj;
	}

	public static List<Map<String,String>> validateRatingData() {
		List<Map<String,String>> dataProviderObj = new ArrayList<Map<String,String>>();
		dataProviderObj = createDataForDP(Constants.EXCEL_FILE, Constants.RATING_DATA);
		return dataProviderObj;
	}

	public static List<Map<String,String>> validateCosineData() {
		List<Map<String,String>> dataProviderObj = new ArrayList<Map<String,String>>();
		dataProviderObj = createDataForDP(Constants.EXCEL_FILE, Constants.COSINE_DATA);
		return dataProviderObj;
	}

	public static List<Map<String,String>> validateUserStatData() {
		List<Map<String,String>> dataProviderObj = new ArrayList<Map<String,String>>();
		dataProviderObj = createDataForDP(Constants.EXCEL_FILE, Constants.USER_STAT_DATA);
		return dataProviderObj;
	}

	public static List<Map<String,String>> validateMovieStatData() {
		List<Map<String,String>> dataProviderObj = new ArrayList<Map<String,String>>();
		dataProviderObj = createDataForDP(Constants.EXCEL_FILE, Constants.MOVIE_STAT_DATA);
		return dataProviderObj;
	}
	
	public static List<Map<String,String>> validateLanguageTrendStatData() {
		List<Map<String,String>> dataProviderObj = new ArrayList<Map<String,String>>();
		dataProviderObj = createDataForDP(Constants.EXCEL_FILE, Constants.LANGUAGE_TREND);
		return dataProviderObj;
	}
	
	public static List<Map<String,String>> validateMovieData() {
		List<Map<String,String>> dataProviderObj = new ArrayList<Map<String,String>>();
		dataProviderObj = createDataForDP(Constants.EXCEL_FILE, Constants.MOVIE_DATA);
		return dataProviderObj;
	}
	
	public static List<Map<String,String>> validateMovieByYearData() {
		List<Map<String,String>> dataProviderObj = new ArrayList<Map<String,String>>();
		dataProviderObj = createDataForDP(Constants.EXCEL_FILE, Constants.MOVIE_BY_YEAR_DATA);
		return dataProviderObj;
	}
	
	
	public static List<Map<String, String>> validateUserPreferenceData() {
		// TODO Auto-generated method stub
		List<Map<String,String>> dataProviderObj = new ArrayList<Map<String,String>>();
		dataProviderObj = createDataForDP(Constants.EXCEL_FILE, Constants.USER_PREFERENCE_DATA);
		return dataProviderObj;
	}
	public static List<Map<String,String>> createDataForDP(String fileName, String sheetName) {
		//Object[][] dataProviderObj = null;
		List<Map<String,String>> filteredList = new ArrayList<Map<String,String>>();
		try {


			List<Map<String,String>> excelDataList = ExcelUtil.createData(fileName, sheetName);

			for (Iterator<Map<String,String>> iterator = excelDataList.iterator(); iterator.hasNext();) {
				Map<String, String> map = (Map<String, String>) iterator.next();
				//if(null != map.get(ServiceConstants.RUNTEST) && map.get(ServiceConstants.RUNTEST).equals(ServiceConstants.RUNTESTVAL)) {
				filteredList.add(map);
				/*} else {
						//Add Login Logic					
				}*/
			}

			/*dataProviderObj = new Object[filteredList.size()][1];

			for (int i = 0; i < filteredList.size(); i++) {
				dataProviderObj[i][0] = (Map<String,String>)filteredList.get(i);
			}*/
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return filteredList;
	}

	

}
