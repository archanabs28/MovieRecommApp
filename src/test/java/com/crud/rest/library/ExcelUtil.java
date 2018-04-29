/**
 * 
 */
package com.crud.rest.library;

import java.io.InputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

/**
 * @author Archana
 *
 */
public class ExcelUtil {
	
	 public static List<Map<String, String>> createData(String fileName , String sheetName) {
		  final String NULLROW = "NULLROW";
//		  	Object [] [] datProviderData = null;
		  	List<Map<String, String>> excelDataList = null;
		  	List<String> keyList = null;
		  	Map<String, String> dataMap = null;
//		  	String[] numericStringArr = null;
//		  	String numericString = null;
//		  	int colCount = 1;
//		  	int totalColumns = 0;
	 
		  	InputStream xlFile = DataSourceUtils.getExcelFile(fileName);
	     
			try 
			{
				keyList = new ArrayList<String>();
				OPCPackage opc = OPCPackage.open(xlFile);
				 
				Workbook wb1 = WorkbookFactory.create(opc);
				
				
				Sheet sheet = wb1.getSheet(sheetName);
				//Sheet sheet = wb1.getSheetAt(0);
				
				System.out.println(sheet);
//				int rowNum = sheet.getLastRowNum();
	             
//				datProviderData = new Object [sheet.getLastRowNum()- sheet.getFirstRowNum()][colCount];
	            excelDataList = new ArrayList<Map<String, String>>();
	            
	            for (Row row : sheet) {
	            	
	            	if(row.getRowNum() == sheet.getFirstRowNum()) {
//	            		totalColumns = row.getLastCellNum();
	            		for (int fr = 0; fr < row.getLastCellNum(); fr++) {
	            			if(null != row.getCell(fr)){
	            				keyList.add(row.getCell(fr).toString());
	            			} else {
	            				keyList.add(NULLROW);
	            			}          				
	            		}

	            	} else if (row.getRowNum() > sheet.getFirstRowNum() ){
	            		dataMap = new LinkedHashMap<String, String>();
	            		for (int cn = 0 ; cn < keyList.size();cn++ ) {
	            			
	            			if(!keyList.get(cn).equals(NULLROW)) {
	            				
	            				if(null == row.getCell(cn)){
	            					
	            					dataMap.put(keyList.get(cn).toString(), "");        
	            					
	            				} else {
	            					
	            					Cell cell = row.getCell(cn, Row.CREATE_NULL_AS_BLANK);
	            					
	            					if(cell.getCellType() == Cell.CELL_TYPE_BLANK) {
	            						dataMap.put(keyList.get(cn).toString(),"");
	                    			} 
	            					else if (cell.getCellType() != Cell.CELL_TYPE_NUMERIC) {
	                    				dataMap.put(keyList.get(cn).toString(),(row.getCell(cn).toString()));
	        				        } 
	            					else {
	            						dataMap.put(keyList.get(cn).toString(),getValueAsString(row.getCell(cn).toString()));
	            					}
	            				}
	            			}
	            		}

	            		//datProviderData [row.getRowNum() - (sheet.getFirstRowNum()) - 1][0] = dataMap;
	            		excelDataList.add(dataMap);
	            	}
	             }
				 opc.close();
			} catch (Exception e) {
					e.printStackTrace();
			}
	     return excelDataList;
	  }

	private static String getValueAsString(String value){
		BigDecimal decimal = null;
		Double checkForDbl = Double.valueOf(value);
		
		if( (checkForDbl - (checkForDbl.intValue())) > 0 ) {
			decimal = new BigDecimal(value);
		} else {
			decimal = new BigDecimal(Double.valueOf(value));
		}
		return decimal.toPlainString();
	}
	  
	

}
