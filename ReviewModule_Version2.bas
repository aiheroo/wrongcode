Option Explicit

Public UserName As String

Sub ProcessData()
    On Error Resume Next
    
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("Data")
    
    Dim i As Long
    For i = 1 To ws.UsedRange.Rows.Count
        ws.Cells(i, 1).Value = ws.Cells(i, 1).Value * 2
        Application.ScreenUpdating = True
    Next i
End Sub

Sub x()
    Dim a
    For a = 1 To 100
        ThisWorkbook.Sheets(1).Cells(a, 1) = "x"
    Next
End Sub