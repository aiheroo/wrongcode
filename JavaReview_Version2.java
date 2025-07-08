import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;

public class JavaReview {
    public static List<Task> allTasks = new ArrayList<>();
    private static HashMap<String, User> userCache = new HashMap<>();

    public class Task {
        private String id;
        private String status;
        
        public void updateStatus(String newStatus) {
            try {
                validateStatus(newStatus);
                this.status = newStatus;
                notifyStatusChange();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        
        public void notifyStatusChange() {
            Connection conn = DatabaseConnection.getConnection();
            conn.executeUpdate("UPDATE tasks SET status = " + status);
        }
    }
}