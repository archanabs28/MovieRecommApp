package com.crud.rest.library;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;

import org.apache.log4j.Logger;

import com.crud.rest.controller.test.MovieControllerTest;



/**
 * @author 
 *
 */
public class DataSourceUtils {	

	public static InputStream getExcelFile(String xlFileName){
		// Load the workbook 
		//InputStream xlFile = ClassLoader.getSystemResourceAsStream("classpath:Movie_APITest.xlsx");
		InputStream xlFile = MovieControllerTest.class.getResourceAsStream(xlFileName);
//		LOGGER.debug(" getBaseFilePath() : "+getBaseFilePath());
		
		// If not found, try again without base path
		if (null==xlFile){
			xlFile = ClassLoader.getSystemResourceAsStream(xlFileName);
		}
		System.out.println(xlFile.toString());
		return xlFile;
	}
}